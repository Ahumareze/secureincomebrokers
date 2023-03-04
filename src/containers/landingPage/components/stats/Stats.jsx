import React from 'react';

//styles
import classes from './stats.module.css';

//icons
import { FiClock, FiDownload, FiUpload, FiUser } from 'react-icons/fi';

function Stats() {

    const Item = ({icon, name, amount}) => {
        return(
            <div className={classes.Item}>
                {icon}
                <h3>{amount}</h3>
                <p>{name}</p>
            </div>
        )
    };

    return (
        <div className={classes.container}>
            <h1><span>Our</span> Statistics</h1>
            <div className={classes.mainContainer}>
                <Item icon={<FiClock size={50} className={classes.icon} />} name={'Days Online'} amount={'2,500 +'}/>
                <Item icon={<FiUser size={50} className={classes.icon} />} name={'Accounts Created'} amount={'50,258'}/>
                <Item icon={<FiDownload size={50} className={classes.icon} />} name={'Total Deposited'} amount={'$14,297,534'}/>
                <Item icon={<FiUpload size={50} className={classes.icon} />} name={'Total Withdrawn'} amount={'$359,074,345'}/>
            </div>
        </div>
    )
}

export default Stats