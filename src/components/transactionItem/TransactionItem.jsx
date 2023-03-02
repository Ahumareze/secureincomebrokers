import React from 'react';

//styles
import classes from './transactionitem.module.css';

//images
import bitcoin from '../../assets/crypto/bitcoin.png';

function TransactionItem() {
    return (
        <div className={classes.container}>
            <div>1</div>
            <div className={classes.transaction}> <img src={bitcoin} alt='' /> Bitcoin</div>
            <div className={classes.type}>Deposit</div>
            <div className={classes.amount}>$200</div>
            <div className={classes.status}>Pending</div>
            <div className={classes.date}>14th, April 2022</div>
        </div>
    )
}

export default TransactionItem