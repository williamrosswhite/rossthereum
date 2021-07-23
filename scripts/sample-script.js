const hre = require("hardhat");

async function main() {

  const account0 = await hre.ethers.getSigner("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");
  const account1 = await hre.ethers.getSigner("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  const account2 = await hre.ethers.getSigner("0x70997970C51812dc3A010C7d01b50e0d17dc79C8");

  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();

  console.log("\ntoken owner address:", token.address);
  const tokenStartingBalance = await token.balanceOf(token.address);
  console.log("token address starting balance:", parseInt(tokenStartingBalance, 16));

  console.log("account 0 address:", account0.address);
  const address0StartingBalance = await token.balanceOf(account0.address);
  console.log("address 0 starting token balance:", parseInt(address0StartingBalance, 16));

  console.log("account 1 address:", account1.address);
  const address1StartingBalance = await token.balanceOf(account1.address);
  console.log("address 1 starting token balance:", parseInt(address1StartingBalance, 16));

  console.log("account 2 address:", account2.address);
  const address2StartingBalance = await token.balanceOf(account2.address);
  console.log("address 2 starting token balance:", parseInt(address2StartingBalance, 16));

  console.log("\nstarting 0 to 1 transfer...");

  token.transfer(account0.address, 200);
  token.transfer(account1.address, 200);
  token.transfer(token.address, 200);

  console.log("token owner address:", token.address);

  const tokenMiddleBalance = await token.balanceOf(token.address);
  console.log("token address middle balance:", parseInt(tokenMiddleBalance, 16));

  console.log("account 0 address:", account0.address);
  const address0MiddleBalance = await token.balanceOf(account0.address);
  console.log("address 0 middle token balance:", parseInt(address0MiddleBalance, 16));

  console.log("account 1 address:", account1.address);
  const address1MiddleBalance = await token.balanceOf(account1.address);
  console.log("address 1 middle token balance:", parseInt(address1MiddleBalance, 16));

  console.log("account 2 address:", account2.address);
  const address2MiddleBalance = await token.balanceOf(account2.address);
  console.log("address 2 middle token balance:", parseInt(address2MiddleBalance, 16));

  console.log("\nstarting 1 to 2 transfer...");
  token.exchange(account1.address, account2.address, 200);

  console.log("token owner address:", token.address);
  const tokenFinalBalance = await token.balanceOf(token.address);
  console.log("token address final balance:", parseInt(tokenFinalBalance, 16));

  console.log("account 0 address:", account0.address);
  const address0FinalBalance = await token.balanceOf(account0.address);
  console.log("address 0 final token balance:", parseInt(address0FinalBalance, 16));

  console.log("account 1 address:", account1.address);
  const address1FinalBalance = await token.balanceOf(account1.address);
  console.log("address 1 final token balance:", parseInt(address1FinalBalance, 16));

  console.log("account 2 address:", account2.address);
  const address2FinalBalance = await token.balanceOf(account2.address);
  console.log("address 2 final token balance:", parseInt(address2FinalBalance, 16));

}



main()

  .then(() => process.exit(0))

  .catch((error) => {

    console.error(error);

    process.exit(1);

  });