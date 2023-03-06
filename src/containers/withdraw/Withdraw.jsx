import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//styles
import classes from './withdraw.module.css';

//components
import { DashboardHeader, Loader, SideDrawer } from '../../components';
import InsufficientBalance from './components/InsufficientBalance';
import WithdrawalForm from './components/WithdrawalForm';
import DoneModal from './components/modal/DoneModal';
import { withdraw } from '../../redux/actions';

function Withdraw() {
    //initialize
    const dispatch = useDispatch();
    
    //redux state
    const userData = useSelector(state => state.mainReducer.userData);
    const loading = useSelector(state => state.mainReducer.withdrawLoading);
    const withdrawModal = useSelector(state => state.mainReducer.withdrawModal);

    //UI state
    const [balance, setBalance] = useState(10);

    useEffect(() => {
        // const total = userData.basic_plan + userData.advance_plan + userData.diamond_plan;
        // setBalance(total)
    }, [userData]);

    const withdrawHandler = (value) => {
        dispatch(withdraw(value.amount, 'Basic plan', value.selected.name, userData))
    };

    let container = <InsufficientBalance />
    if(balance > 9){
        container = <WithdrawalForm data={userData} withdraw={e => withdrawHandler(e)} />
    }

    return (
        <SideDrawer active={'Withdraw'}>
            <div className={classes.container}>
                <DashboardHeader title={'Withdraw'} />
                <div className={classes.top}>
                    <h3>Availiable Balance: <span>${balance}</span></h3>
                    <p>Withdraw funds from your Secure Income Brokers account straight to your crypto wallet</p>
                </div>
                <div>
                    {loading ? <Loader /> : container }
                </div>
            </div>
            {withdrawModal && <DoneModal />}
        </SideDrawer>
    );
}

export default Withdraw