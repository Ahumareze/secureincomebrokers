import React from 'react';

//styles
import classes from './plans.module.css';

function Plans() {

    const Item = ({middle, logo, name, perks, minDeposit, maxDeposit}) => {
        return(
            <div className={`${classes.Item} ${middle && classes.middle}`}>
                <div className={classes.top}>
                    <div className={classes.icon}>{logo}</div>
                    <h3>{name}</h3>
                    <p>{perks}</p>
                </div>
                <div>
                    <div className={classes.detail}>Minimum Deposit <p>{minDeposit}</p></div>
                    <div className={classes.detail}>Maximum Deposit <p>{maxDeposit}</p></div>
                    <div className={classes.detail}>Principle Return <p>Yes</p></div>
                    <div className={classes.detail}>Instant Withdraw <p>Yes</p></div>
                </div>
            </div>
        )
    };

    return (
        <div className={classes.container}>
            <h1> <span>Our</span> Investment Packages</h1>
            <p className={classes.intro}>Secure Income Brokers has a wide variety of Investment Plans for you to choose from</p>
            <div className={classes.mainContainer}>
                <Item logo={'🚀'} name={'Basic'} perks={'7% After 24 Hours'} minDeposit={'$50'} maxDeposit={'$10,000'} />
                <Item middle logo={'🔥'} name={'Advance'} perks={'30% After 24 Hours'} minDeposit={'$700'} maxDeposit={'$20,000'} />
                <Item logo={'💎'} name={'Diamond'} perks={'50% After 38 Hours'} minDeposit={'$4,000'} maxDeposit={'Unlimited'} />
            </div>
        </div>
    )
}

export default Plans