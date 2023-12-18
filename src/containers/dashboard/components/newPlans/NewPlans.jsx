import React from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import classes from './newplans.module.css';

function NewPlans() {
    //initialize
    const navigate = useNavigate();

    const Item = ({percentage, min, max, name, time}) => {
        return(
            <div className={classes.item}>
                <div className={classes.top}>
                    <h1>{percentage}</h1>
                    <p>{name} Plan</p>
                </div>
                <div className={classes.middle}>
                    <p>Duration: <span>{time}</span></p>
                    <p>Minimum: <span>{min}</span></p>
                    <p>Maximum: <span>{max}</span></p>
                </div>
                <div className={classes.bottom}>
                    <button onClick={() => navigate('/deposit')}>Invest</button>
                </div>
                
            </div>
        )
    };

    return (
        <div className={classes.container}>
            <h2>Plans</h2>
            <div className={classes.mainContainer}>
                <Item percentage={'6.5%'} name={'Light Trader'} min={'$500'} max={'$999'} time={'24 hours'} />
                <Item percentage={'8.5%'} name={'Pro Trader'} min={'$1,000'} max={'$2,000'} time={'24 hours'}  />
                <Item percentage={'10%'} name={'Advance Trader'} min={'$2,500'} max={'$3,000'} time={'24 hours'}  />
                <Item percentage={'20.5%'} name={'Tycoon Trader'} min={'$5,000'} max={'Unlimited'} time={'48 hours'}  />
                <Item percentage={'25.5%'} name={'Premium Trader'} min={'$8,000'} max={'Unlimited'} time={'24 hours'}  />
                <Item percentage={'25%'} name={'Masters Trader'} min={'$10,000'} max={'Unlimited'} time={'10 hours'}  />
                <Item percentage={'30%'} name={'Elite Trader'} min={'$15,000'} max={'Unlimited'} time={'10 hours'}  />
                <Item percentage={'50%'} name={'VIP Trader'} min={'$25,000'} max={'Unlimited'} time={'10 hours'}  />
            </div>
        </div>
    )
}

export default NewPlans