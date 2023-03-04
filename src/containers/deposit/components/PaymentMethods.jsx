import React from 'react';

//styles
import classes from '../deposit.module.css';

function PaymentMethods({img, name, onSelect, active}) {
    return (
        <div className={`${classes.PaymentMethod} ${active && classes.active_paymentmethod}`} onClick={onSelect}>
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default PaymentMethods