import React from 'react';

//styles
import classes from './newtransaction.module.css';

function NewTransaction({name, amount}) {
    return (
        <div className={classes.container}>
            <p>Investor <span>{name}</span> just <span>invested</span></p>
            <h3>${amount.toLocaleString()}</h3>
        </div>
    )
}

export default NewTransaction