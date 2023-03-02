import React, { useState } from 'react';

//styles
import classes from '../dashboard.module.css';

//icons
import { FaWallet } from 'react-icons/fa';
import { FiEyeOff, FiEye } from 'react-icons/fi';

function BalanceBox({name, icon, secure, amount}) {
    const [showBalance, setShowBalance] = useState(true);

    return (
        <div className={classes.BalanceBox}>
            <div className={classes.BalanceBox_top}>
                {name}
                <div>
                    {icon}
                </div>
            </div>
            <div className={classes.BalanceBox_main}>
                {showBalance ? <h2>${(amount).toLocaleString()}</h2> : <h2>*****</h2>}
                <div className={classes.view_balance} onClick={() => setShowBalance(prev => !prev)} style={!secure ? {display: 'none'} : {}} >
                    {showBalance ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </div>
            </div>
        </div>
    )
}

export default BalanceBox