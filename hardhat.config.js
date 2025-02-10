// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.28",
// };
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    polygon_zkevm: {
      url: "https://rpc.public.zkevm-test.net", 
      accounts: [`0x${process.env.PRIVATE_KEY}`], 
    },
  },
};
