import React from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import classes from './plans.module.css';

//icons
import { VscTriangleDown } from 'react-icons/vsc';
import { FiCheckCircle } from 'react-icons/fi';

function PlansUpdate() {
    //navigate
    const navigate = useNavigate()

    const Item = ({blue, percentage, duration, investment, planName}) => {
        return(
            <div className={`${classes.planItem} ${blue && classes.blue_planItem}`}>
                <div className={classes.top}>
                    {percentage}<span>%</span>
                </div>
                <div className={classes.arrow}>
                    {duration}
                </div>
                <div className={classes.plan_lists}>
                    <div className={classes.plan_lists_item}>
                        <FiCheckCircle className={classes.plan_lists_icon} /> <p>{investment}</p>
                    </div>
                    <div className={classes.plan_lists_item}>
                        <FiCheckCircle className={classes.plan_lists_icon} /> <p>Instant Payments</p>
                    </div>
                    <div className={classes.plan_lists_item}>
                        <FiCheckCircle className={classes.plan_lists_icon} /> <p>{planName}</p>
                    </div>
                </div>
                <button onClick={() => navigate('/register')}>Get Started</button>
            </div>
        )
    };

    return (
        <div className={classes.container}>
            <Item percentage={6.5} duration={'24 hours'} investment={'min: $500, Max: $999'} planName={'Light Trader Package'} />
            <Item percentage={8.5} duration={'24 hours'} investment={'min: $1000, Max: $2000'} planName={'Pro Trader Package'} blue />
            <Item percentage={10} duration={'24 hours'} investment={'min: $2500, Max: $3000'} planName={'Advance Trader Package'} />
            <Item percentage={20.5} duration={'48 hours'} investment={'min: $5000, Max: UNLIMITED'} planName={'Tycoon Trader Package'} blue />
            <Item percentage={25.5} duration={'24 hours'} investment={'min: $8000, Max: UNLIMITED'} planName={'Premium Trader Package'} />
            <Item percentage={25} duration={'10 hours'} investment={'min: $10000, Max: UNLIMITED'} planName={'Masters Trader Package'} blue />
            <Item percentage={30} duration={'10 hours'} investment={'min: $15000, Max: UNLIMITED'} planName={'Elite Trader Package'} />
            <Item percentage={50} duration={'10 hours'} investment={'min: $25000, Max: UNLIMITED'} planName={'VIP Trader Package'} blue />
        </div>
    )
}

export default PlansUpdate