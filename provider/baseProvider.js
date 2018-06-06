/**
 * 1. Register new provider, define dot price and curve
 * 2. Start publish data
 */
let zapsdk = require("zapsdk")
const web3 = require("web3")
const assert = require("assert")
let host = "http://localhost:8545";
const w3 = new web3(host)
const netId = 1528305713545//await w3.eth.net.getId();//TODO remove after test

class provider{

    constructor({owner}){
        assert(owner,"owner address is required");
        this.owner = owner;
        this.registry = new w3.eth.Contract(ZapRegistryArtifact.abi,ZapRegistryArtifact.networks[netId].address)
    }

    async  createProvider({pubkey, title,endpoint,params}){
        try {
            for(let i in params){
                params[i] = web3.utils.urf8ToHex(params[i])
            }
            let provider = await this.registry.methods.initiateProvider(new web3.utils.BN(pubkey),
                web3.utils.utf8ToHex(title),
                web3.utils.utf8ToHex(endpoint),
                params)
                .send({from: owner, gas: 1000000});
            console.log("provider : ", provider)
        }catch(err){console.error(err)}
    }

    async  initCurve({endpoint,curve}){
        try{
            assert(curve.)
            let success = await this.initCurve(this.owner,endpoint,curve)

        }catch(err){
            console.error(err)
        }
    }
}
async function providerFlow()
{
    try {
        let host = "http://localhost:8545";
        const w3 = new web3(host)
        const netId = 1528305713545//await w3.eth.net.getId();
        const accounts = await w3.eth.getAccounts()
        const owner = accounts[0]
        console.log("owner : ",owner, "net id : ", netId,"host : ", host)
        const registry = new ZapRegistry({provider:host,
            address:ZapRegistryArtifact.networks[netId].address,
            artifact:ZapRegistryArtifact});
        console.log("registry : ", registry)
        let provider = await registry.initiateProvider({
            public_key:pubkey,
            title:title,
            endpoint :endpoint,
            endpoint_params:endpointParams,
            from:accounts[0],
            gas:gas})
        console.log("provider : ", provider);
    }catch(err){console.error(err)}
}



async function main()
{  try {
        const pubkey = "123456789"
        const title = "stoxProvider"
        const endpoint = "endpoint"
        const endpointParams = "query" //string that will need to be broken down in provider side
        let host = "http://localhost:8545";
        const w3 = new web3(host)
        const netId = 1528305713545//await w3.eth.net.getId();
        const accounts = await w3.eth.getAccounts()
        const owner = accounts[0]
        for(let i in params) {
            params[i] = web3.utils.urf8ToHex(params[i])
            let provider = await createProvider(pubkey,owner,title,endpoint,endpointParams)
            assert(provider,"failed to create provider")
            let curve = await
    }
    }catch(err){console.error(err)}
}