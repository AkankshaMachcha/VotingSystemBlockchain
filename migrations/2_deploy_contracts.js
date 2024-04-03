const Migrations1 = artifacts.require("Candidates");
const Migrations2= artifacts.require("Voters");
const Migrations3 = artifacts.require("Election");

module.exports = function (deployer) {
   deployer.deploy(Migrations1);
  deployer.deploy(Migrations2);
   deployer.deploy(Migrations3);
};
