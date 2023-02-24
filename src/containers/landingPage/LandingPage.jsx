import React from 'react';

//components
import { Footer, Header } from '../../components';
import { About, Coursel, Plans, Services, Stats, Team } from './components';

//styles
import classes from './landingpage.module.css';

function LandingPage() {
    return (
        <div className={classes.container}>
            <Header active={'Home'} />
            <Coursel />
            <About />
            <Services />
            <Plans />
            <Stats />
            <Team />
            <Footer />
        </div>
    )
}

export default LandingPage