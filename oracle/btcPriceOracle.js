/**
 * 1. Register new oracle, define dot price and curve
 * 2. Start publish data
 */
let zapsdk = require("zapsdk")
const web3 = require("web3")
const provider = new web3.providers.HttpProvider("http://localhost:8545")
const w3 = new web3(provider)
console.log(ZapDispatchArtifact)
let address = ZapRegistryArtifact.networks['42'].address
async function createProvider() {
    try {
        let accounts = await w3.eth.getAccounts()
        console.log(address)
        let zapRegistry = new w3.eth.Contract(ZapRegistryArtifact.abi)
        //console.log(zapRegistry)
        let oracle = await zapRegistry.methods.initiateProvider(
            new w3.utils.BN("111"), w3.utils.utf8ToHex("kim"),
            w3.utils.utf8ToHex("btcPrice"), []).send({from: accounts[1], gas: 1000000})
        console.log(oracle)
    }catch(err){
        console.error(err)
    }



}
createProvider()