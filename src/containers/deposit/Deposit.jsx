import React, { useState } from 'react';

//styles
import classes from './deposit.module.css';

//componets
import { DashboardHeader, Input, SelectInput, SideDrawer } from '../../components';
import PaymentMethods from './components/PaymentMethods';

//images
import binance from '../../assets/crypto/binance.png';
import bitcoin from '../../assets/crypto/bitcoin.png';
import dogecoin from '../../assets/crypto/dogecoin.png';
import ethereum from '../../assets/crypto/ethereum.png';

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
                        <Input title={'Amount'} type={'number'} onChange={e => setAmount(e)} value={50}  />
                        <SelectInput title={'Select plan'} onChange={e => setSelectedPlan(e)} />
                        <div className={classes.PaymentMethods}>
                            <h3>Payment method</h3>
                            <div className={classes.PaymentMethods_main}>
                                <PaymentMethods img={bitcoin} name={'Bitcoin'} />
                                <PaymentMethods img={binance} name={'Binance'} />
                                <PaymentMethods img={ethereum} name={'Ethereum'} />
                                <PaymentMethods img={dogecoin} name={'Dogecoin'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SideDrawer>
    );
}

export default Deposit