// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        this;
        return msg.data;
    }

    function _msgValue() internal view virtual returns (uint256 value) {
        return msg.value;
    }
}

abstract contract Owner is Context {
    address public owner;

    constructor () {
        owner = _msgSender();
    }

    modifier onlyOwner() {
        require(_msgSender() == owner);
        _;
    }

    function isOwner() internal view returns(bool) {
        return owner == _msgSender();
    }
}

contract Library is Owner {

    struct Book {
        string name;
        string description;
        bool valid;
        uint256 price;
        address owner;
    }

    uint256 public bookId;

    mapping(uint256 => Book) public books;

    struct Tracking {
        uint256 bookId;
        uint256 startTime;
        uint256 endTime;
        address borrower;
    }

    uint256 public trackingId;

    mapping(uint256 => Tracking) public trackings;

    function addBook(string memory name, string memory description, uint256 price) public returns (bool success) {
        Book memory book = Book(name, description, true, price, _msgSender());
        books[bookId] = book;
        emit NewBook(bookId++);

        return true;
    }

    function borrowBook(uint256 _bookId, uint256 startTime, uint256 endTime) public payable returns (bool) {
        Book storage book = books[_bookId];
        require(book.valid == true, "This book is currently on loan");
        require(_msgValue() == book.price * _days(startTime, endTime), "Incorrect fund sent");
        _sendTRX(book.owner, _msgValue());
        _createTracking(_bookId, startTime, endTime);

        emit NewRental(_bookId, trackingId++);

        return true;
    }

    function deleteBook(uint256 _bookId) public returns (bool success) {
        require(_msgSender() == books[_bookId].owner || isOwner(),
                "You are not authorized to delete this book");
        
        delete books[_bookId];

        emit DeleteBook(_bookId);

        return true;
    }

    function _days(uint256 startTime, uint256 endTime) internal pure returns (uint256) {
        if ((endTime - startTime) % uint256(86400) == 0 ) {
            return (endTime - startTime) / uint256(86400);
        } else {
            return (endTime - startTime) / uint256(86400) + uint256(1);
        }
    }

    function _sendTRX(address receiver, uint256 value) internal {
        payable(address(uint160(receiver))).transfer(value);
    }

    function _createTracking(uint256 _bookId, uint256 startTime, uint256 endTime) internal {
        trackings[trackingId] = Tracking(_bookId, startTime, endTime, _msgSender());

        Book storage book = books[_bookId];

        book.valid = false;
    }

    event NewBook(uint256 indexed bookId);

    event NewRental(uint256 indexed bookId, uint256 indexed trackingId);

    event DeleteBook(uint256 indexed bookId);
}