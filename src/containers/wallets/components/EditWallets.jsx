import React, { useState } from 'react';

//styles
import classes from '../wallets.module.css';

//components
import { Input } from '../../../components';
import { FiChevronLeft } from 'react-icons/fi';

function EditWallets({discard, data, onEdit}) {
    const [bitcoin_address, setBitcoin_ddress] = useState(data.bitcoin_address);
    const [ethereum_address, setEthereum_address] = useState(data.ethereum_address);
    const [binance_address, setBinance_address] = useState(data.binance_address);
    const [dogecoin_address, setDogeoin_address] = useState(data.dogecoin_address);

    return (
        <div className={classes.MainWallets}>
            <div className={classes.back} onClick={discard}> <FiChevronLeft /> Discard </div>
            <div className={classes.MainWallets_main}>
                <Input title={'Bitcoin wallet address'} type={'text'} onChange={e => setBitcoin_ddress(e)} value={bitcoin_address} />
                <Input title={'Ethereum wallet address'} type={'text'} onChange={e => setEthereum_address(e)} value={ethereum_address} />
                <Input title={'BNB wallet address'} type={'text'} onChange={e => setBinance_address(e)} value={binance_address} />
                <Input title={'Dogecoin wallet address'} type={'text'} onChange={e => setDogeoin_address(e)} value={dogecoin_address} />
            </div>
            <button className={classes.edit_button} onClick={() => onEdit({bitcoin_address, ethereum_address, binance_address, dogecoin_address})}>Update wallet address</button>
        </div>
    )
}

export default EditWallets