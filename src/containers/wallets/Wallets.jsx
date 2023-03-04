import React from 'react';
import { useSelector } from 'react-redux';

//styles
import classes from './wallets.module.css';

//components
import { DashboardHeader, SideDrawer } from '../../components';

function Wallets() {
    //redux state
    const userData = useSelector(state => state.mainReducer.userData);

    return (
        <SideDrawer active={'Wallets'}>
            <div className={classes.container}>
                <DashboardHeader title={'Wallets'} />
                <div className={classes.top}>
                    <h3>Availiable Balance: <span>${userData.basic_plan + userData.advance_plan + userData.diamond_plan}</span></h3>
                    <p>Withdraw funds from your Secure Income Brokers account straight to your crypto wallet</p>
                </div>
                <div>
                    
                </div>
            </div>
        </SideDrawer>
    );
}

export default Wallets