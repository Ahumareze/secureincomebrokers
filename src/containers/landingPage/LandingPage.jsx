import React from 'react';

//components
import { Header } from '../../components';
import { About, Coursel, Plans, Services, Stats, Team } from './components';

//styles
import classes from './landingpage.module.css';

function LandingPage() {
    return (
        <div className={classes.container}>
            <Header />
            <Coursel />
            <About />
            <Services />
            <Plans />
            <Stats />
            <Team />
        </div>
    )
}

export default LandingPage