import React from 'react';

//styles
import classes from './transactionitem.module.css';

//images
import bitcoin from '../../assets/crypto/bitcoin.png';
import ethereum from '../../assets/crypto/ethereum.png';
import binance from '../../assets/crypto/binance.png';
import doge from '../../assets/crypto/dogecoin.png';

function TransactionItem({sn, type, name, amount, status, date, onSelect}) {
    
    let status_container = <div className={classes.pending}>{status}</div>;
    if(status === 'failed'){
        status_container = <div className={classes.failed}>{status}</div>
    }else if(status === 'success'){
        status_container = <div className={classes.success}>{status}</div>
    };

    let coin = <img src={bitcoin} alt='' />;
    if(name === 'Ethereum'){
        coin = <img src={ethereum} alt='' />;
    }else if(name === 'Binance'){
        coin = <img src={binance} alt='' />;
    }else if(coin === 'Dogecoin'){
        coin = <img src={doge} alt='' />;
    }
    return (
        <div className={classes.container} onClick={onSelect}>
            <div className={classes.sn}>{sn}</div>
            <div className={classes.transaction}> {coin} {name}</div>
            <div className={classes.type}>{type}</div>
            <div className={classes.amount}>${amount.toLocaleString()}</div>
            {status_container}
            <div className={classes.date}>{date}</div>
        </div>
    )
}

export default TransactionItem