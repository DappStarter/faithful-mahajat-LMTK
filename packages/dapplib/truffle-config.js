require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember promote half area obscure truly'; 
let testAccounts = [
"0x316f93be54f093dfd21008c7c4e4a13430c8588b10226ea8e08684dea94519d2",
"0x463b829abf909560cc3ebf96ef18920c56645e8117f75a5883966f567e5fe904",
"0x8b89d6e9cebab0d62ac26e069d2a8da4096b865ec8148dc58929a417dd498fbf",
"0x3c205bf717438498a89fba37a132f2149a7ffffe789970c1dc4cd23d5071c9f8",
"0xeaa35e6f2fdf91b9c210c976a285936f74da836c575512ee04ebf98a0ffd297c",
"0xf214176d58e02a520d72f82fb1f01bd9a849b4f393eeacce41bbbaf332174041",
"0x6f366bfabea452462fe358e6cf5683d50ea4edabf419178fe98c0acacdb37f9c",
"0x24f96139dab27d6428f7c81474506d1817141b0411f4062507e2b97cb8dd4146",
"0xf96121eec205c71a292c01492f1735c074b593d1149cd27fb9c83f57582c84dd",
"0x1855186009f0492d1bc2b82d12199b6ebfbce862a35f995cc08426ed4b12b602"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

