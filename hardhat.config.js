require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
// accountkey
const privateKey = fs.readFileSync(".secret").toString(); 
//infura project id
const projectId = fs.readFileSync(".projectId").toString();
module.exports = {
  networks: {
    hardhat: {
      chainId : 1337
    },
    mumbai: {
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
