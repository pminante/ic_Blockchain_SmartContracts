const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');
const provider = new HDWalletProvider(
    'chalk nephew happy turtle silk holiday clump harbor note rebuild quote bone',
    'https://goerli.infura.io/v3/beda3db646714f22a219d832667e8733'
);
const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deply from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hello world']})
    .send({gas:'1000000', from: accounts[0]});

    console.log('Constract deployd to', result.options.address);
    provider.engine.stop();
};
deploy();