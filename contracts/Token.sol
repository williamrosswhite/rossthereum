pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
    string public name = "Rossthereum";

    string public symbol = "RTH";

    uint256 public totalSupply = 1000000;

    address public owner;

    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function exchange(
        address from,
        address to,
        uint256 amount
    ) external {
        require(balances[from] >= amount, "Not enough tokens");
        balances[from] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }

    function ownerAddress() external view returns (address) {
        return owner;
    }
}
