
// -------- ISSUE -----------

// curl -X POST  https://api.shasta.trongrid.io/wallet/createassetissue -d '{
//     "owner_address":"417946F66D0FC67924DA0AC9936183AB3B07C81126",
//     "name":"0x6173736574497373756531353330383934333132313538",
//     "abbr": "0x6162627231353330383934333132313538",
//     "total_supply" :100000000,
//     "trx_num":1,
//     "num":1,
//     "precision":1,
//     "start_time" : 1581928489000,
//     "end_time":1581938187000,
//     "description":"007570646174654e616d6531353330363038383733343633",
//     "url":"007570646174654e616d6531353330363038383733343633",
//     "free_asset_net_limit":10000,
//     "public_free_asset_net_limit":10000,
//     "frozen_supply":{"frozen_amount":1, "frozen_days":2}
//     }'

const issue = async () => {
    const privateKey = "XXXXXXX";
    const createAssetAddress = "TM2TmqauSEiRf16CyFgzHV2BVxBejY9iyR";
    const trc_options = {
        name: "test",
        abbreviation: "tt",
        description: "forest",
        url: "www.baitu.com",
        totalSupply: 10000000,
        trxRatio: 1,
        tokenRatio: 1,
        saleStart: 1581929489000,
        saleEnd: 1581938187000,
        freeBansWidth: 0,
        freeBansWidthLimit: 0,
        frozenAmount: 0,
        frozenDuration: 0,
        precision: 6

    };

    // create an unsigned transacion for TRC-10 issuing
    tradeobj = await tronWeb.transactionBuilder.createAsset(
        trc_options,
        createAssetAddress
    ).then(output => {
        console.log('- Output:', output, '\n');
        return output;
    });

    // sign
    const signedtxn = await tronWeb.trx.sign(
        tradeobj,
        privateKey
    );

    //broadcast
    const receipt = await tronWeb.trx.sendRawTransaction(
        signedtxn
    ).then(output => {
        console.log('- Output:', output, '\n');
        return output;
    })
}

// -------- TRANSFER -----------

// curl -X POST   https://127.0.0.1:8090/wallet/transferasset -d '{
//     "owner_address":"41d1e7a6bc354106cb410e65ff8b181c600ff14292", 
//     "to_address": "41e552f6487585c2b58bc2c9bb4492bc1f17132cd0", 
//     "asset_name": "0x6173736574497373756531353330383934333132313538", 
//     "amount": 100
//   }'

const transfer = async () => {
    const privateKey = 'XXXXXXXX';
    const toAddress = 'TM2TmqauSEiRf16CyFgzHV2BVxBejY9iyR';
    const tokenID = '1000088';
    const amount = 1000;
    const fromAddress = 'TVDGpn4hCSzJ5nkHPLetk8KQBtwaTppnkr';

    // create an unsigneed transfer
    tradeobj = await tronWeb.transactionBuilder.sendToken(
        toAddress,
        amount,
        tokenID,
        fromAddress
    ).then(output => {
        console.log('- Output:', output, '\n');
        return output;
    });

    // sign
    const signedtxn = await tronWeb.trx.sing(
        tradeobj,
        privateKey
    );

    // broadcast
    const receipt = await tronWeb.trx.sendRawTransaction(
        signedtxn
    ).then(output => {
        console.log('- Output:', output, '\n');
        return output;
    });
}

// -------- check balance -----------

// curl -X POST  https://api.shasta.trongrid.io/wallet/getaccount -d 
//      '{"address": "TM2TmqauSEiRf16CyFgzHV2BVxBejY9iyR",
//        "visible": true
//      }'

const checkBalance = async () => {
    const address = "TM2TmqauSEiRf16CyFgzHV2BVxBejY9iyR";

    // check the balance by assetV2 value in return
    const tradeobj = await tronWeb.trx.getAccount(
        address,
    ).then(output => {console.log('- Output:', output, '\n');});
}


