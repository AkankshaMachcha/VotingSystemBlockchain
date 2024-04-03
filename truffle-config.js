module.exports = {
 
  // contracts_directory: "./contracts",
  // migrations_directory: "./migrations",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
  },


compilers: {
  solc: {
    version: "^0.5.16", // Change this to match the Solidity compiler version you are using
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
};
