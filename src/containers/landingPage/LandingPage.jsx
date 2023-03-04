import React, { useState } from 'react';

//components
import { Footer, Header, SideBar } from '../../components';
import { About, Coursel, Plans, Services, Stats, Team } from './components';

//styles
import classes from './landingpage.module.css';

function LandingPage() {
    //UI state
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className={classes.container}>
            <Header active={'Home'} open={() => setShowSidebar(true)}/>
            <Coursel />
            <About />
            <Services />
            <Plans />
            <Stats />
            <Team />
            <Footer />
            {showSidebar && <SideBar close={() => setShowSidebar(false)}  />}
        </div>
    )
}

export default LandingPage