import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//styles
import classes from './deposit.module.css';

//componets
import { DashboardHeader, Input, SelectInput, SideDrawer } from '../../components';
import PaymentMethods from './components/PaymentMethods';
import ConfirmModal from './components/ConfirmModal';

//data
import { coins } from '../../data';
import DoneModal from './components/DoneModal';

//redux actions
import { deposit } from '../../redux/actions';

const plans = ['Basic', 'Advance', 'Diamond'];

function Deposit() {
    //initialize
    const dispatch = useDispatch();

    //redux state
    const userData = useSelector(state => state.mainReducer.userData);
    const depositModal = useSelector(state => state.mainReducer.depositModal);

    //UI state
    const [selectedPlan, setSelectedPlan] = useState('Basic');
    const [amount, setAmount] = useState(50);
    const [selectedPayment, setSelectedPayment] = useState('Bitcoin');
    const [confirmModal, setConfirm] = useState(false)
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if(userData){
            const total = userData.basic_plan + userData.advance_plan + userData.diamond_plan;
            setBalance(total)
        }
    }, [userData])

    const handleDeposit = () => {
        dispatch(deposit(amount,selectedPlan, selectedPayment, userData))
    }

    return (
        <SideDrawer active={'Deposit'}>
            <div className={classes.container}>
                <DashboardHeader title={'Deposit'} />
                <div className={classes.top}>
                    <h3>Availiable Balance: <span>${balance} </span></h3>
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
                    <button onClick={() => setConfirm(true)}>Make Deposit</button>
                </div>
            </div>
            {confirmModal && <ConfirmModal plan={selectedPlan} amount={amount} coin={selectedPayment} close={() => setConfirm(null)} deposit={handleDeposit} />}
            {depositModal && <DoneModal /> }
        </SideDrawer>
    );
}

export default Deposit