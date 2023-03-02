import React, { useState } from 'react';

//styles
import classes from '../dashboard.module.css';

function BalanceBox({name, icon, secure, amount}) {

    return (
        <div className={classes.BalanceBox}>
            <div className={classes.BalanceBox_top}>
                {name}
                <div>
                    {icon}
                </div>
            </div>
            <div className={classes.BalanceBox_main}>
                <h2>${(amount).toLocaleString()}</h2>
            </div>
        </div>
    )
}

export default BalanceBox