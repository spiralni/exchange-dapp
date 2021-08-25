// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Token {
    // As specified en ERC20
    string public name = "OSO Token";
    string public symbol = "OSO";
    uint public decimals = 18;
    uint public totalSupply;

    constructor() {
        totalSupply = 1000000*(10**decimals);
    }
}