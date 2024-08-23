// ------------- name --------------

const name = async () => {
    const TronWeb = require('tronweb');
    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://nile.trongrid.io');
    const solidiyNode = new HttpProvider('https://nile.trongrid.io');
    const eventServer = new HttpProvider('https://nile.trongrid.io');
    const privateKey = '';
    const tronWeb = new TronWeb(fullNode, solidiyNode, eventServer, privateKey);

    async function trc721_name() {
        const trc721ContractAddress = 'TRio4FwnDvtYN2ogss6Qm7Hn2EaTLwWMNs';
        try {
            let contract = await tronWeb.contract().at(trc721ContractAddress);
            let trc721name = await contract.name().call();
            console.log('name: ', trc721name);

        } catch (err) {
            console.error('trigger smart contract error: ', err);

        }
    }
}

// ------------- symbol --------------

const symbol = async () => {
    const TronWeb = require('tronweb');
    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://nile.trongrid.io');
    const solidiyNode = new HttpProvider('https://nile.trongrid.io');
    const eventServer = new HttpProvider('https://nile.trongrid.io');
    const privateKey = '';
    const tronWeb = new TronWeb(fullNode, solidiyNode, eventServer, privateKey);

    async function trc721_symbol() {
        const trc721ContractAddress = 'TRio4FwnDvtYN2ogss6Qm7Hn2EaTLwWMNs';
        try {
            let contract = await tronWeb.contract().at(trc721ContractAddress);
            let trc721symbol = await contract.symbol().call();
            console.log('symbol: ', trc721symbol);

        } catch (err) {
            console.error('trigger smart contract error: ', err);

        }
    }
}

// ------------- balance --------------

const balance = async () => {
    const TronWeb = require('tronweb');
    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://nile.trongrid.io');
    const solidiyNode = new HttpProvider('https://nile.trongrid.io');
    const eventServer = new HttpProvider('https://nile.trongrid.io');
    const privateKey = '';
    const tronWeb = new TronWeb(fullNode, solidiyNode, eventServer, privateKey);

    async function trc721_balanceOf() {
        const trc721ContractAddress = 'TRio4FwnDvtYN2ogss6Qm7Hn2EaTLwWMNs';
        try {
            let contract = await tronWeb.contract().at(trc721ContractAddress);
            let trc721balanceOf = await contract.balanceOf().call();
            console.log('balanceOf: ', trc721balanceOf);

        } catch (err) {
            console.error('trigger smart contract error: ', err);

        }
    }
}


// ------------- nft transfer --------------

const transferFrom = async () => {
    const TronWeb = require('tronweb');
    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://nile.trongrid.io');
    const solidiyNode = new HttpProvider('https://nile.trongrid.io');
    const eventServer = new HttpProvider('https://nile.trongrid.io');
    const privateKey = '';
    const tronWeb = new TronWeb(fullNode, solidiyNode, eventServer, privateKey);

    async function trc721_transferFrom() {
        const trc721ContractAddress = 'TRio4FwnDvtYN2ogss6Qm7Hn2EaTLwWMNs';
        try {
            let contract = await tronWeb.contract().at(trc721ContractAddress);
            await contract.transferFrom(
                "TA1g2WQiXbU5GnYBTJ5Cp22dvSjT3ug9uK", //address _from
                "TM8vRhebJD7zeoBLWAnr9SrYrhWNrHjBgC", //address _to
                666 //uint256 tokenId
            ).send({
                feeLimit: 10000000
            }).then(output => {console.log('- transferFrom hash:', output, '\n');});

        } catch (err) {
            console.error('trigger smart contract error: ', err);

        }
    }
}


// ------------- nft approve --------------

const approve = async () => {
    const TronWeb = require('tronweb');
    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://nile.trongrid.io');
    const solidiyNode = new HttpProvider('https://nile.trongrid.io');
    const eventServer = new HttpProvider('https://nile.trongrid.io');
    const privateKey = '';
    const tronWeb = new TronWeb(fullNode, solidiyNode, eventServer, privateKey);

    async function trc721_approve() {
        const trc721ContractAddress = 'TRio4FwnDvtYN2ogss6Qm7Hn2EaTLwWMNs';
        try {
            let contract = await tronWeb.contract().at(trc721ContractAddress);
            await contract.approve(
                "TA1g2WQiXbU5GnYBTJ5Cp22dvSjT3ug9uK", //address _spender
                666 //uint256 tokenId
            ).send({
                feeLimit: 10000000
            }).then(output => {console.log('- approve hash:', output, '\n');});

        } catch (err) {
            console.error('trigger smart contract error: ', err);

        }
    }
}