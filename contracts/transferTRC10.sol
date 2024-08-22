// SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.0;

contract trasnferTokenContract {
    constructor() payable public {}

    function() payble external {}

    function transferTokenTest(
        address payable toAddress, 
        uint256 tokenValue, 
        trcToken id
    ) payable public {

        toAddress.transferToken(tokenValue, id);
    }

    function msgTokenValueAndTokenIdTest() public payable returns(trcToken, uint256) {
        trcToken id = msg.tokenId;
        uint256 value = msg.tokenvalue;
        return (id, value);
    }

    function getTokenBalanceTest(address accountAddress) payble public returns (uint256) {
        trcToken id = 10000001;
        return accountAddress.tokenBalance(id);
    }

}