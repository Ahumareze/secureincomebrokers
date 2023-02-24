import React from 'react';

//styles
import classes from './about.module.css';

//components
import { Header } from '../../components';

function About() {
    return (
        <div className={classes.container}>
            <Header active={'About'} />
        </div>
    )
}

export default About