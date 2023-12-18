import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//styles
import classes from './dashboard.module.css';

//components
import { DashboardHeader, SideDrawer, TransactionItem, TransactionModal } from '../../components';
import BalanceBox from './components/BalanceBox';
import Plans from './components/plans/Plans';

//icons
import { FaWallet } from 'react-icons/fa';
import { AiFillBank } from 'react-icons/ai';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { RiHandCoinFill } from 'react-icons/ri';
import Transactions from './components/Transactions';
import NewPlans from './components/newPlans/NewPlans';


function Dashboard() {
    //redux state
    const userData = useSelector(state => state.mainReducer.userData);

    //UI state
    const [showmodal, setShowmodal] = useState(null);

    let container;

    if(userData){
        container = (
            <div className={classes.container}>
                <DashboardHeader title={'Dashboard'} />
                <div className={classes.balanceBoxes}>
                    <BalanceBox icon={ <FaWallet size={14} /> } name='Balance' secure amount={ userData.balance} />
                    <BalanceBox icon={ <AiFillBank size={14} /> } name='Deposited' amount={userData.deposited}  />
                    <BalanceBox icon={ <RiHandCoinFill size={14} /> } name='Earnings' amount={userData.earned}  />
                    <BalanceBox icon={ <BsCreditCard2BackFill size={14} /> } name='Withdrawn' amount={userData.withdrawn}  />
                </div>
                <Transactions data={userData.transactions} onSelect={e => setShowmodal(e)} />
                <NewPlans />
            </div>
        )
    }

    return (
        <>
        <SideDrawer active={'Dashboard'}>
            {container}
        </SideDrawer>
        {showmodal && <TransactionModal data={showmodal} userId={userData.userId} close={() => setShowmodal(null)} />}
        </>
    )
}

export default Dashboard