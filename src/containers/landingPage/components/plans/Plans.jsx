import React from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import classes from './plans.module.css';

function Plans() {
    //initialize
    const navigate = useNavigate();

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

                <div className={classes.bottom}>
                    <button onClick={() => navigate('/register')}>Get Started</button>
                </div>
            </div>
        )
    };

    return (
        <div className={classes.container}>
            <h1> <span>Our</span> Investment Packages</h1>
            <p className={classes.intro}>Secure Income Brokers has a wide variety of Investment Plans for you to choose from</p>
            <div className={classes.mainContainer}>
                <Item logo={'🚀'} name={'Basic'} perks={'7% After 24 Hours'} minDeposit={'$500'} maxDeposit={'$999'} />
                <Item middle logo={'🔥'} name={'Advance'} perks={'15% After 24 Hours'} minDeposit={'$5,000'} maxDeposit={'Unlimited'} />
                <Item logo={'💎'} name={'Diamond'} perks={'30% After 38 Hours'} minDeposit={'$25,000'} maxDeposit={'Unlimited'} />
            </div>
        </div>
    )
}

export default Plans