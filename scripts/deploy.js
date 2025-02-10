const hre = require("hardhat");

async function main() {
  const WaterReport = await hre.ethers.getContractFactory("WaterReport");
  const contract = await WaterReport.deploy();

  await contract.deployed();
  console.log(`Contract deployed at: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
