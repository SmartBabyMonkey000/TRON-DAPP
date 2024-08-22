

let account = null
let libraryContract;
let libraryContractAddress = 'TD7g2t959bRjm5DFsAHYTwFrhrNLXU3gJ9';
let bookRentConract = null;

export async function setLibraryContract() {
    bookRentConract = await window.tronweb.contract().at(libraryContractAddress);
}

async function mounted() {
    await setLibraryContract();
    const books = await fetchAllBooks();
}

const result = await bookRentConract.addBook(name, description, price).send({
    feeLimit: 100_000_000,
    callValue: 0,
    shouldPollResponse: true
});

const books = [];
const bookId = await bookRentConract.bookId().call();
for (let i = 0; i < bookId; i++) {
    const book = await bookRentConract.books(i).call();
    if (book.name != "") {
        books.push(
            {
                id: i, 
                name: book.name, 
                description: book.description, 
                price: tronweb.fromSun(book.price)
            }
        )
    }
}
return books

result = await bookRentContract.borrowBook(spaceId, checkInDate, CheckOutDate).send({
    feeLimit: 100_000_000,
    callValue: totalPrice,
    shouldPollResponse: true;
})
