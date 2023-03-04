import React from 'react';

//styles
import classes from './transactionitem.module.css';

//images
import bitcoin from '../../assets/crypto/bitcoin.png';

function TransactionItem({sn, type, name, amount, status, date, onSelect}) {
    
    let status_container = <div className={classes.pending}>{status}</div>;
    if(status === 'failed'){
        status_container = <div className={classes.failed}>{status}</div>
    }else if(status === 'success'){
        status_container = <div className={classes.success}>{status}</div>
    }
    return (
        <div className={classes.container} onClick={onSelect}>
            <div className={classes.sn}>{sn}</div>
            <div className={classes.transaction}> <img src={bitcoin} alt='' /> {name}</div>
            <div className={classes.type}>{type}</div>
            <div className={classes.amount}>${amount.toLocaleString()}</div>
            {status_container}
            <div className={classes.date}>{date}</div>
        </div>
    )
}

export default TransactionItem