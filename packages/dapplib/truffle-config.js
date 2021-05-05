require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain hole good area tail surprise'; 
let testAccounts = [
"0x37680404f14296ebe0510d3f808c3a405cdf258bf9986e981815795aa8a12c15",
"0xf6215027e28bf986f7dd4b743090151c4e48145e6812d59975c4bb526c282977",
"0xa5d8a3d01685a2a7f5625c59d0fe4c366d8fb6b68acbf12bbbe84d3e6af34e0c",
"0xca9f865d19bba0aed8fbb1cf9d2548396beb15bc73a0e3642d362f6ba6b24eaf",
"0xabd017a9ef3141733602137794dd39be7f8d6727816c7a4f9ecf3b840104512f",
"0x24f3b519dd8ac088bd7cfc9b2cbf17ba8fe9d156dc09b0b84be3c305d656ed28",
"0xedbe8ce7d76dae4a05276df22a816591b88065fe6c120072dee270fac29178b4",
"0x174ef6370e8abe41d5f3eeb70458410214a022fc7c9d54b59b8610d6adece96e",
"0x8c7f49820e6faaf73a3668a971d5e11e3e6bd42c5a5ade5fb4afcdff647f4774",
"0x405cdc7da31c5c0b86209e22919cb40c79b6dd51557dac8ca9be1fe150ce8058"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
