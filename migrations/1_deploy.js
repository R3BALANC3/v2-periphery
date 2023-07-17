var Router = artifacts.require("UniswapV2Router02.sol");

module.exports = function(deployer) {
  // Testnet
  
  const factory = '0x692888d1d359be06cB9EFFA47eB946E9ecA695aC'
  const wpls = '0xA1077a294dDE1B09bB078844df40758a5D0f9a27'
  deployer.deploy(Router, factory, wpls);
  
/*
  // BSC
  const factoryAddress = '0x5f76c63aAcA37ABDBcbFF0Ce67A1b8560ACDcbE7'
  const WBNBAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  deployer.deploy(Router, factoryAddress, WBNBAddress);*/
};