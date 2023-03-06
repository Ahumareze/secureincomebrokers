import React, { useState } from 'react';

//styles
import classes from '../withdraw.module.css';

//components
import { Input } from '../../../components';
import Wallet from './Wallet';

//images
import bitcoin from '../../../assets/crypto/bitcoin.png';
import ethereum from '../../../assets/crypto/ethereum.png';
import dogecoin from '../../../assets/crypto/dogecoin.png';
import binance from '../../../assets/crypto/binance.png';

function WithdrawalForm({withdraw, data}) {
    //UI state
    const [amount, setAmount] = useState(50);
    const [selected, setSelected] = useState({name: 'Bitoin', address: data.bitcoin_address});

    return (
        <div className={classes.WithdrawalForm}>
            <h3>Withdrawal Form</h3>
            <div className={classes.form_container}>
                <Input title={'Amount'} type={'number'} onChange={e => setAmount(e)} value={50}  />
                <div className={classes.walletAddresses}>
                    <p>Select recieving wallet address</p>
                    <Wallet
                        img={bitcoin}
                        name='Bitcoin'
                        address={data.bitcoin_address}
                        onSelect={e => setSelected(e)}
                        active={selected.name === 'Bitcoin'}
                    />
                    <Wallet
                        img={ethereum}
                        name='Ethereum'
                        address={data.ethereum_address}
                        onSelect={e => setSelected(e)}
                        active={selected.name === 'Ethereum'}
                    />
                    <Wallet
                        img={binance}
                        name='BNB'
                        address={data.binance_address}
                        onSelect={e => setSelected(e)}
                        active={selected.name === 'BNB'}
                    />
                    <Wallet
                        img={dogecoin}
                        name='Dogecoin'
                        address={data.dogecoin_address}
                        onSelect={e => setSelected(e)}
                        active={selected.name === 'Dogecoin'}
                    />
                </div>
            </div>
            <button onClick={() => withdraw({amount, selected})}>Withdraw</button>
        </div>
    )
}

export default WithdrawalForm