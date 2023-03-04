import React, { useState } from 'react';

//styles
import classes from './about.module.css';

//components
import { Footer, Header, SideBar } from '../../components';
import AboutMini from './components/about/AboutMini';

function About() {
    //UI state
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className={classes.container}>
            <Header active={'About'} open={() => setShowSidebar(true)}/>
            <AboutMini />
            <Footer />
            {showSidebar && <SideBar close={() => setShowSidebar(false)}  />}
        </div>
    )
}

export default About