import React, { useState } from 'react';

//styles
import classes from './deposit.module.css';

//componets
import { DashboardHeader, Input, SelectInput, SideDrawer } from '../../components';
import PaymentMethods from './components/PaymentMethods';
import ConfirmModal from './components/ConfirmModal';

//data
import { coins } from '../../data';
import DoneModal from './components/DoneModal';
const plans = ['Basic', 'Advance', 'Diamond'];

function Deposit() {
    //UI state
    const [selectedPlan, setSelectedPlan] = useState();
    const [amount, setAmount] = useState();
    const [selectedPayment, setSelectedPayment] = useState('Basic');

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
                        <SelectInput title={'Select plan'} onChange={e => setSelectedPlan(e)} data={plans} value={'Basic'} />
                        <div className={classes.PaymentMethods}>
                            <h3>Payment method</h3>
                            <div className={classes.PaymentMethods_main}>
                                {coins.map((i, idx) => (
                                    <PaymentMethods
                                        img={i.img}
                                        name={i.name}
                                        onSelect={() => setSelectedPayment(i.name)}
                                        active={i.name === selectedPayment}
                                        key={idx}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <button>Make Deposit</button>
                </div>
            </div>
            {/* <DoneModal /> */}
        </SideDrawer>
    );
}

export default Deposit