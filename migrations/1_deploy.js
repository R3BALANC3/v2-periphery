var Router = artifacts.require("UniswapV2Router02.sol");

module.exports = function(deployer) {
  // Testnet
  
  const factory = '0x7e165A16Cb7c8B0C627c5E696c8C25Ae6b0A47D4'
  const weth = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
  deployer.deploy(Router, factory, weth);
  
/*
  // BSC
  const factoryAddress = '0x5f76c63aAcA37ABDBcbFF0Ce67A1b8560ACDcbE7'
  const WBNBAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  deployer.deploy(Router, factoryAddress, WBNBAddress);*/
};