//SPDX-License-Identifizer: me
pragma solidity ^0.8.9;

contract helloWorld {
    event UpdateMessages9(string oldStr, string newStr);

    string public message;

    constructor(string memory initMessage) {
        message = initMessage;
    }

    function update(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;
        emit UpdateMessages9(oldMsg, newMessage);
    }
}
