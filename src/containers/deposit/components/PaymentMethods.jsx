import React from 'react';

//styles
import classes from '../deposit.module.css';

function PaymentMethods({img, name}) {
    return (
        <div className={classes.PaymentMethod}>
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default PaymentMethods