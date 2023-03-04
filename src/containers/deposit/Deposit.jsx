import React, { useState } from 'react';

//styles
import classes from './deposit.module.css';

//componets
import { DashboardHeader, Input, SelectInput, SideDrawer } from '../../components';

function Deposit() {
    //UI state
    const [selectedPlan, setSelectedPlan] = useState();
    const [amount, setAmount] = useState();
    
    return (
        <SideDrawer active={'Deposit'}>
            <div className={classes.container}>
                <DashboardHeader title={'Deposit'} />
                <div className={classes.top}>
                    <h3>Availiable Balance: <span>$590.00</span></h3>
                    <p>Fill out the deposit form below to fund your account.</p>
                </div>
                <div className={classes.mainContainer}>
                    <h3>Deposit Form</h3>
                    <div className={classes.form_container}>
                        <Input title={'Amount'} type={'number'} onChange={e => console.log(e)} value={50}  />
                        <SelectInput title={'Select plan'} onChange={e => setPlans} />
                    </div>
                </div>
            </div>
        </SideDrawer>
    );
}

export default Deposit