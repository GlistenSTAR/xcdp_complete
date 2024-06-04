require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

// Example Only. Please use MPC or env
const PRIVATE_KEY = process.env.PRIVATE_KEY; 
const INFURA_API_KEY = process.env.INFURA_API_KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/", // BSC Testnet RPC URL
      chainId: 97,
      accounts: [PRIVATE_KEY] 
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  }
};
