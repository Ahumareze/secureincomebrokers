import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//styles
import classes from './transactions.module.css';

//components
import { DashboardHeader, SideDrawer, TransactionModal } from '../../components';
import TransactionsList from './components/TransactionsList';


function Transactions() {
     //redux state
     const userData = useSelector(state => state.mainReducer.userData);

     //UI state
     const [showmodal, setShowmodal] = useState(null);

    return (
        <SideDrawer active={'Transactions'}>
            <div className={classes.container}>
                <DashboardHeader title={'Transactions'} />
                <div className={classes.top}>
                    <h3>Availiable Balance: <span>${userData.balance}</span></h3>
                </div>
                <TransactionsList data={userData.transactions} onSelect={e => setShowmodal(e)} />
            </div>
            {showmodal && <TransactionModal data={showmodal} userId={userData.userId} close={() => setShowmodal(null)} /> }
        </SideDrawer>
    )
}

export default Transactions