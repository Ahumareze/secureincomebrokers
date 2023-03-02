import React from 'react';

//components
import { DashboardHeader, SideDrawer, TransactionItem, TransactionModal } from '../../components';
import BalanceBox from './components/BalanceBox';
import Plans from './components/plans/Plans';

//icons
import { FaWallet } from 'react-icons/fa';

//styles
import classes from './dashboard.module.css';
import { AiFillBank } from 'react-icons/ai';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { RiHandCoinFill } from 'react-icons/ri';

function Dashboard() {

    return (
        <>
        <SideDrawer>
            <div className={classes.container}>
                <DashboardHeader title={'Dashboard'} />
                <div className={classes.balanceBoxes}>
                    <BalanceBox icon={ <FaWallet size={14} /> } name='Balance' secure amount={4500} />
                    <BalanceBox icon={ <AiFillBank size={14} /> } name='Deposited' amount={710}  />
                    <BalanceBox icon={ <RiHandCoinFill size={14} /> } name='Earnings' amount={3500}  />
                    <BalanceBox icon={ <BsCreditCard2BackFill size={14} /> } name='Withdrawn' amount={200}  />
                </div>
                <Plans />
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
        </SideDrawer>
        {/* <TransactionModal /> */}
        </>
    )
}

export default Dashboard