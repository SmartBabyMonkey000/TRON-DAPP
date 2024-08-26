const TronWeb = require('tronweb');
const privateKey = process.env.PRIVATE_KEY;
const apiKey = process.env.API_KEY;

const tronWeb = new TronWeb({
    fullHost: "https://api.trongrid.io",
    headers: { "TRON-PRO-API-KEY": apiKey },
    privateKey: privateKey,
});

const getPoolInfo = async () => {
    const contract = await tronWeb.getContract('TNTfaTpkdd4AQDeqr8SGG7tgdkdjdhbP5c');
    console
}