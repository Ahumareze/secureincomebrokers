import React from 'react';
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


function Dashboard() {
    //redux state
    const userData = useSelector(state => state.mainReducer.userData);

    console.log(userData);

    let container;

    if(userData){
        container = (
            <div className={classes.container}>
                <DashboardHeader title={'Dashboard'} />
                <div className={classes.balanceBoxes}>
                    <BalanceBox icon={ <FaWallet size={14} /> } name='Balance' secure amount={ userData.basic_plan + userData.advance_plan + userData.diamond_plan } />
                    <BalanceBox icon={ <AiFillBank size={14} /> } name='Deposited' amount={userData.deposited}  />
                    <BalanceBox icon={ <RiHandCoinFill size={14} /> } name='Earnings' amount={userData.earned}  />
                    <BalanceBox icon={ <BsCreditCard2BackFill size={14} /> } name='Withdrawn' amount={userData.withdrawn}  />
                </div>
                <Plans data={userData} />
                <div className={classes.transactions}>
                    <div className={classes.transactions_top}>
                        <h2>Transactions</h2>
                        <button>View All</button>
                    </div>
                    <div className={classes.transactions_container}>
                        <div className={classes.transactions_header}>
                            <div className={classes.transactions_header_sn}>SN</div>
                            <div>Transaction</div>
                            <div className={classes.transactions_header_type}>Type</div>
                            <div className={classes.transactions_header_amount}>Amount</div>
                            <div className={classes.transactions_header_status}>status</div>
                            <div className={classes.transactions_header_date}>date</div>
                        </div>
                        <TransactionItem />
                        <TransactionItem />
                        <TransactionItem />
                        <TransactionItem />
                        <TransactionItem />
                        <TransactionItem />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
        <SideDrawer active={'Dashboard'}>
            {container}
        </SideDrawer>
        {/* <TransactionModal /> */}
        </>
    )
}

export default Dashboard