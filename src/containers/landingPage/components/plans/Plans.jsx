import React from 'react';

//styles
import classes from './plans.module.css';

function Plans() {

    const Item = ({middle}) => {
        return(
            <div className={`${classes.Item} ${middle && classes.middle}`}>
                <div className={classes.top}>
                    <div className={classes.icon}>🚀</div>
                    <h3>Plan A</h3>
                    <p>7% After 24 Hours</p>
                </div>
                <div>
                    <div className={classes.detail}>Minimum Deposit <p>$300</p></div>
                    <div className={classes.detail}>Maximum Deposit <p>$12,000</p></div>
                    <div className={classes.detail}>Principle Return <p>Yes</p></div>
                    <div className={classes.detail}>Instant Withdraw <p>Yes</p></div>
                </div>
            </div>
        )
    };

    return (
        <div className={classes.container}>
            <h1> <span>Our</span> Investment Packages</h1>
            <p className={classes.intro}>ACCESS-PROFIT.CO has a wide variety of Investment Plans for you to choose from</p>
            <div className={classes.mainContainer}>
                <Item />
                <Item middle />
                <Item />
            </div>
        </div>
    )
}

export default Plans