/**
 * Get coins price from tickers endpoint of gdax
 * Based on multiple exchanges for data's feeds
*/
let requests = require("request-promise");
const APIURL = "https://api.gdax.com"

async function getTickerPrice(primary, secondary){
    primary = primary.toUpperCase();
    secondary = secondary.toUpperCase();
    let response = await requests({
        uri:`${APIURL}/products/${primary}-${secondary}/ticker`,
        headers : {
            'User-Agent':'Request-Promise'
        },
        json:true
    });
    return response
}

//
// module.exports = {
//     getBTCPrice
// }

getTickerPrice("BTC","USD")
.then(res=>{console.log(res)})
.catch(err=>{console.error(err)});