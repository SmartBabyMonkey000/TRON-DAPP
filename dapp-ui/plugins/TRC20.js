const TronWeb = require('tronweb');

// ----------- name -----------

// HTTP

// /wallet/triggerconstantcontract
// Description: Trigger the constant of the smart contract, the transaction is off the blockchain
// demo: curl -X POST  https://127.0.0.1:8090/wallet/triggerconstantcontract -d '{
// "contract_address":"419E62BE7F4F103C36507CB2A753418791B1CDC182",
// "function_selector":"name()",
// "owner_address":"41977C20977F412C2A1AA4EF3D49FEE5EC4C31CDFB"
// }'

const name = async () =>{
    const TronWeb = require('tronweb');

    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://127.0.0.1:8090');
    const solidityNode = new HttpProvider('https://127.0.0.1:8090');
    const eventServer = new HttpProvider('https://127.0.0.1:8090');
    const privateKey = 'XXXXXXXXX';
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

    async function triggerSmartContract() {
        const trc20ContractAddress = 'TQQg4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK';

        try {
            let contract = await tronWeb.contract().at(trc20ContractAddress);
            let result = await contract.name().call();
            console.log('result: ', result);
        } catch (error) {
            console.error('trigger smart contract error', error);
        }
    }
}

// ----------- symbol -----------

// HTTP

// /wallet/triggerconstantcontract
// Description: Trigger the constant of the smart contract, the transaction is off the blockchain
// demo: curl -X POST  https://127.0.0.1:8090/wallet/triggerconstantcontract -d '{
// "contract_address":"419E62BE7F4F103C36507CB2A753418791B1CDC182",
// "function_selector":"symbol()",
// "owner_address":"41977C20977F412C2A1AA4EF3D49FEE5EC4C31CDFB"
// }'

const symbol = async () =>{
    const TronWeb = require('tronweb');

    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://127.0.0.1:8090');
    const solidityNode = new HttpProvider('https://127.0.0.1:8090');
    const eventServer = new HttpProvider('https://127.0.0.1:8090');
    const privateKey = 'XXXXXXXXX';
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

    async function triggerSmartContract() {
        const trc20ContractAddress = 'TQQg4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK';

        try {
            let contract = await tronWeb.contract().at(trc20ContractAddress);
            let result = await contract.symbol().call();
            console.log('result: ', result);
        } catch (error) {
            console.error('trigger smart contract error', error);
        }
    }
}

// ----------- decimals -----------

// HTTP

// /wallet/triggerconstantcontract
// Description: Trigger the constant of the smart contract, the transaction is off the blockchain
// demo: curl -X POST  https://127.0.0.1:8090/wallet/triggerconstantcontract -d '{
// "contract_address":"419E62BE7F4F103C36507CB2A753418791B1CDC182",
// "function_selector":"decimals()",
// "owner_address":"41977C20977F412C2A1AA4EF3D49FEE5EC4C31CDFB"
// }'

const decimals = async () =>{
    const TronWeb = require('tronweb');

    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://127.0.0.1:8090');
    const solidityNode = new HttpProvider('https://127.0.0.1:8090');
    const eventServer = new HttpProvider('https://127.0.0.1:8090');
    const privateKey = 'XXXXXXXXX';
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

    async function triggerSmartContract() {
        const trc20ContractAddress = 'TQQg4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK';

        try {
            let contract = await tronWeb.contract().at(trc20ContractAddress);
            let result = await contract.decimals().call();
            console.log('result: ', result);
        } catch (error) {
            console.error('trigger smart contract error', error);
        }
    }
}

// ----------- totalSupply -----------

// HTTP

// /wallet/triggerconstantcontract
// Description: Trigger the constant of the smart contract, the transaction is off the blockchain
// demo: curl -X POST  https://127.0.0.1:8090/wallet/triggerconstantcontract -d '{
// "contract_address":"419E62BE7F4F103C36507CB2A753418791B1CDC182",
// "function_selector":"totalSupply()",
// "owner_address":"41977C20977F412C2A1AA4EF3D49FEE5EC4C31CDFB"
// }'

const totalSupply = async () =>{
    const TronWeb = require('tronweb');

    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://127.0.0.1:8090');
    const solidityNode = new HttpProvider('https://127.0.0.1:8090');
    const eventServer = new HttpProvider('https://127.0.0.1:8090');
    const privateKey = 'XXXXXXXXX';
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

    async function triggerSmartContract() {
        const trc20ContractAddress = 'TQQg4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK';

        try {
            let contract = await tronWeb.contract().at(trc20ContractAddress);
            let result = await contract.totalSupply().call();
            console.log('result: ', result);
        } catch (error) {
            console.error('trigger smart contract error', error);
        }
    }
}

// ----------- balanceOf -----------

// HTTP

// /wallet/triggerconstantcontract
// Description: Trigger the constant of the smart contract, the transaction is off the blockchain
// demo: curl -X POST https://127.0.0.1:8090/wallet/triggerconstantcontract -d '{
// "contract_address":"419E62BE7F4F103C36507CB2A753418791B1CDC182",
// "function_selector":"balanceOf(address)",
// "parameter":"000000000000000000000041977C20977F412C2A1AA4EF3D49FEE5EC4C31CDFB",
// "owner_address":"41977C20977F412C2A1AA4EF3D49FEE5EC4C31CDFB"
// }'

const balanceOf = async () =>{
    const TronWeb = require('tronweb');

    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://127.0.0.1:8090');
    const solidityNode = new HttpProvider('https://127.0.0.1:8090');
    const eventServer = new HttpProvider('https://127.0.0.1:8090');
    const privateKey = 'XXXXXXXXX';
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

    async function triggerSmartContract() {
        const trc20ContractAddress = 'TQQg4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK';
        const address = 'TM2TmqauSEiRf16CyFgzHV2BVxBe...'

        try {
            let contract = await tronWeb.contract().at(trc20ContractAddress);
            let result = await contract.balanceOf(address).call();
            console.log('result: ', result);
        } catch (error) {
            console.error('trigger smart contract error', error);
        }
    }
}

// ----------- transfer -----------

// HTTP

// wallet/triggersmartcontract
// Description: Trigger smart contract
// demo: curl -X POST https://127.0.0.1:8090/wallet/triggersmartcontract -d '{
// "contract_address":"419E62BE7F4F103C36507CB2A753418791B1CDC182",
// "function_selector":"transfer(address,uint256)",
// "parameter":"00000000000000000000004115208EF33A926919ED270E2FA61367B2DA3753DA0000000000000000000000000000000000000000000000000000000000000032",
// "fee_limit":100000000,
// "call_value":0,
// "owner_address":"41977C20977F412C2A1AA4EF3D49FEE5EC4C31CDFB"
// }'

const transfer = async () =>{
    const TronWeb = require('tronweb');

    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://127.0.0.1:8090');
    const solidityNode = new HttpProvider('https://127.0.0.1:8090');
    const eventServer = new HttpProvider('https://127.0.0.1:8090');
    const privateKey = 'XXXXXXXXX';
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

    async function triggerSmartContract() {
        const trc20ContractAddress = 'TQQg4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK';
        const address = 'TM2TmqauSEiRf16CyFgzHV2BVxBe...'

        try {
            let contract = await tronWeb.contract().at(trc20ContractAddress);
            let result = await contract.transfer(
                "TVDGP...",
                100000
            ).send({
                feeLimit: 1000000
            }).then(output => {console.log('- Output:', output, '\n')});
            console.log('result: ', result);
        } catch (error) {
            console.error('trigger smart contract error', error);
        }
    }
}

// ----------- approve -----------

// HTTP

// wallet/triggersmartcontract
// Description: Trigger smart contract
// demo: curl -X POST https://127.0.0.1:8090/wallet/triggersmartcontract -d '{
// "contract_address":"419E62BE7F4F103C36507CB2A753418791B1CDC182",
// "function_selector":"approve(address,uint256)",
// "parameter":"0000000000000000000000410FB357921DFB0E32CBC9D1B30F09AAD13017F2CD0000000000000000000000000000000000000000000000000000000000000064",
// "fee_limit":100000000,
// "call_value":0,
// "owner_address":"41977C20977F412C2A1AA4EF3D49FEE5EC4C31CDFB"
// }'

const approve = async () =>{
    const TronWeb = require('tronweb');

    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://127.0.0.1:8090');
    const solidityNode = new HttpProvider('https://127.0.0.1:8090');
    const eventServer = new HttpProvider('https://127.0.0.1:8090');
    const privateKey = 'XXXXXXXXX';
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

    async function triggerSmartContract() {
        const trc20ContractAddress = 'TQQg4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK';
        const address = 'TM2TmqauSEiRf16CyFgzHV2BVxBe...'

        try {
            let contract = await tronWeb.contract().at(trc20ContractAddress);
            await contract.approve(
                'TA1...',
                1000000
            ).send({
                feeLimit: 1000000
            }).then(output => {console.log('- Output:', output, '\n');});
            
        } catch (error) {
            console.error('trigger smart contract error', error);
        }
    }
}


// ----------- transferFrom -----------

// HTTP

// wallet/triggersmartcontract
// Description: Trigger smart contract
// demo: curl -X POST https://127.0.0.1:8090/wallet/triggersmartcontract -d '{
// "contract_address":"419E62BE7F4F103C36507CB2A753418791B1CDC182",
// "function_selector":"transferFrom(address,address,uint256)",
// "parameter":"00000000000000000000004109669733965A37BA3582E70CCC5302F8D254675D0000000000000000000000410FB357921DFB0E32CBC9D1B30F09AAD13017F2CD0000000000000000000000000000000000000000000000000000000000000032",
// "fee_limit":100000000,
// "call_value":0,
// "owner_address":"41977C20977F412C2A1AA4EF3D49FEE5EC4C31CDFB"
// }

const transferFrom = async () =>{
    const TronWeb = require('tronweb');

    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://127.0.0.1:8090');
    const solidityNode = new HttpProvider('https://127.0.0.1:8090');
    const eventServer = new HttpProvider('https://127.0.0.1:8090');
    const privateKey = 'XXXXXXXXX';
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

    async function triggerSmartContract() {
        const trc20ContractAddress = 'TQQg4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK';
        const address = 'TM2TmqauSEiRf16CyFgzHV2BVxBe...'

        try {
            let contract = await tronWeb.contract().at(trc20ContractAddress);
            await contract.transferFrom(
                "TM2TmqauSEiRf16CyFgzHV2BVxBej...", //address _from
                "TVDGpn4hCSzJ5nkHPLetk8KQBtwaT...", //address _to
                100000 //amount
            ).send({
                feeLimit: 1000000
            }).then(output => {console.log('- Output:', output, '\n');});
            
        } catch (error) {
            console.error('trigger smart contract error', error);
        }
    }
}

// ----------- allowance -----------

// HTTP

// /wallet/triggerconstantcontract
// Description: Trigger the constant of the smart contract, the transaction is off the blockchain
// demo: curl -X POST https://127.0.0.1:8090/wallet/triggersmartcontract -d '{
// "contract_address":"419E62BE7F4F103C36507CB2A753418791B1CDC182",
// "function_selector":"allowance(address,address)",
// "parameter":"00000000000000000000004109669733965A37BA3582E70CCC5302F8D254675D000000000000000000000041A245B99ECB47B18C6A90ED1D51100C5A9F0641A7",
// "owner_address":"41977C20977F412C2A1AA4EF3D49FEE5EC4C31CDFB"
// }'

const allowance = async () =>{
    const TronWeb = require('tronweb');

    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://127.0.0.1:8090');
    const solidityNode = new HttpProvider('https://127.0.0.1:8090');
    const eventServer = new HttpProvider('https://127.0.0.1:8090');
    const privateKey = 'XXXXXXXXX';
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

    async function triggerSmartContract() {
        const trc20ContractAddress = 'TQQg4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK';
        const address = 'TM2TmqauSEiRf16CyFgzHV2BVxBe...'

        try {
            let contract = await tronWeb.contract().at(trc20ContractAddress);
            const value = await contract.allowance(
                "TM2TmqauSEiRf16CyFgzHV2BVxBejY9...", //address _owner
                "TA1g2WQiXbU5GnYBTJ5Cp22dvSjT3ug..." //address _spender
            ).call();
            console.log('- Output:', value, '\n');
            
        } catch (error) {
            console.error('trigger smart contract error', error);
        }
    }
}
