// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log(
  //   `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );

  const TimeLock = await hre.ethers.getContractFactory("TimeLock");
  const timelock = await TimeLock.deploy(20, [], []);
  await timelock.deployed();

  console.log(`Time Lock deployed to ${timelock.address}`);

  const PlayAstraToken = await hre.ethers.getContractFactory("PlayAstraToken");
  const token = await PlayAstraToken.deploy();
  await token.deployed();

  console.log(`Play Astra Token deployed to ${token.address}`);

  const PlayAstraGovernor = await hre.ethers.getContractFactory("PlayAstraGovernor");
  const governor = await PlayAstraGovernor.deploy(token.address, timelock.address);
  await governor.deployed();

  console.log(`Play Astra Governor deployed to ${governor.address}`);

  const PlayAstraNFT = await hre.ethers.getContractFactory("PlayAstraNFT");
  const nft = await PlayAstraNFT.deploy();
  await nft.deployed();

  console.log(`Play Astra NFT deployed to ${nft.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
