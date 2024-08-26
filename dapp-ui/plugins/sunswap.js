const TronWeb = require('tronweb');
const privateKey = process.env.PRIVATE_KEY;
const apiKey = process.env.API_KEY;

const factoryContractAddressV1= 'TXk8rQSAvPvBBNtqSoY6nCfsXWCSSpTVQF';
const factoryContractAddressV2= 'TKWJdrQkqHisa1X8HUdHEfREvTzw4pMAaY';

const routerContractAddresV1 ='TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE';
const routerContractAddresV2 ='TKzxdSv2FZKQrEqkKVgp5DcwEXBEKMg2Ax';

const tronWeb = new TronWeb({
    fullHost: "https://api.trongrid.io",
    headers: { "TRON-PRO-API-KEY": apiKey },
    privateKey: privateKey,
});

const getPoolInfo = async () => {
    const tokenAddress1 = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
    const tokenAddress2 = 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR';
    const factoryContractV1 = await tronWeb.getContract(factoryContractAddressV1);
    // get liquidity pool's address in V1
    await factoryContractV1.methods.getExchange(tokenAddress);

    // get liquidity pool's address in V2
    const factoryContractV2 = await tronWeb.getContract(factoryContractAddressV2);
    await factoryContractV2.methods.getPair(tokenAddress1, tokenAddress2);
}

const executeTransactions = async () => {
    // sell trx to buy token in V1
    const routerContractV1 = await tronWeb.getContract(routerContractAddresV1);
    await routerContractV1.methods.trxToTokenTransferInput(100, 1662825600, routerContractAddresV1);

    // sell token to buy trx in V1
    await routerContractV1.methods.tokenToTrxTransferInput(100, 1500, 1662825600, routerContractAddresV1);

    // sell token to buy token in V1
    await routerContractV1.methods.tokenToTokenSwapInput(100, 100, 1500, 1662825600, routerContractAddresV1);

    // selll token to buy token in V2
    const routerContractV2 = await tronWeb.getContract(routerContractAddresV2);
    await routerContractV2.methods.swapExactTokensForTokens(
        1000000000000000000,
        1000000,
        ['TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf','TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3'],
        'TF5MekHgFz6neU7zTpX4h2tha3mijDUj3z',
        1662825600
    );

    // sell trx to buy token in V2
    await routerContractV2.methods.swapExactETHForTokens(
        100000000,
        1,
        ['TYsbWxNnyTgsZaTFaue9hqpxkU3Fkco94a','TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf'],
        'TF5MekHgFz6neU7zTpX4h2tha5miPDUj3z',
        1662825600
    );

    // sell token to buy trx in V2
    await routerContractV2.methods.swapExactTokensForETH(
        1000000,
        1000000,
        ['TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf','TYsbWxNnyTgsZaTFaue9hqpxkU3Fkco94a'],
        'TF5MekHgFz6neU7zTpX4h2tha5miPDUj3z',
        1662825600
    )
}

const handleLiquidity = await async () => {
    // add liquidity in V1
    const USDT_TRX_POOL_ADDRESS = 'TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE';
    const poolContract = await tronWeb.getContract(USDT_TRX_POOL_ADDRESS);
    await poolContract.methods.addLiquidity(100, 100, 1662825600);

    // remove liquidity in V1
    await poolContract.methods.removeLiquidity(100, 100, 100, 1662825600);

    // add liquidity in V2
    const routerContractV2 = await tronWeb.getContract(routerContractV2);
    await contract.methods.addLiquidity(
        'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
        'TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3',
        100000000,
        27661108481018349141,
        5000000,
        200000000000000000000,
        TF5MekHgFz6neU7zTpX4h2tha5miPDUj3z,
        1662825600
    );

    // remove liquidity in V2
    await contract.methods.removeLiquidity(
        'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
        'TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3',
        100000000,
        1,
        1,
        TF5MekHgFz6neU7zTpX4h2tha5miPDUj3z,
        1962825600
    );
}