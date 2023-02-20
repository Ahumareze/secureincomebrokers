import React from 'react';

//styles
import classes from './stats.module.css';

//icons
import { FiClock } from 'react-icons/fi';

function Stats() {

    const Item = () => {
        return(
            <div className={classes.Item}>
                <FiClock size={50} className={classes.icon}/>
                <h3>6,689</h3>
                <p>Days Online</p>
            </div>
        )
    };

    return (
        <div className={classes.container}>
            <h1><span>Our</span> Statistics</h1>
            <div className={classes.mainContainer}>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default Stats