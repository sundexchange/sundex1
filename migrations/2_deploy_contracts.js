var SUNDEXToken = artifacts.require("./SUNDEXToken.sol");
var SUNDEXFeeModifiers = artifacts.require("./SUNDEXFeeModifiers.sol");
var SUNDEXExchange = artifacts.require("./SUNDEXExchange.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(SUNDEXToken);
  deployer.deploy(SUNDEXFeeModifiers);
  deployer.deploy(SUNDEXExchange);
};
