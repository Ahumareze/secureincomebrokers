import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//styles
import classes from './wallets.module.css';

//components
import { DashboardHeader, Loader, SideDrawer } from '../../components';
import MainWallets from './components/MainWallets';
import EditWallets from './components/EditWallets';
import DoneModal from './components/modal/DoneModal';

//redux actions
import { handleEdit } from '../../redux/actions';

function Wallets() {
    //initialize
    const dispatch = useDispatch();

    //UI state
    const [edit, setEdit] = useState(false);

    //redux state
    const userData = useSelector(state => state.mainReducer.userData);
    const loading = useSelector(state => state.mainReducer.walletLoading);
    const walletModal = useSelector(state => state.mainReducer.walletModal);

    const editHandler = (e) => {
        const data = {
            ...userData,
            ...e
        }
        dispatch(handleEdit(data, userData.userId))
    }

    let container = <MainWallets data={userData} edit={() => setEdit(true)} />;
    if(edit){
        container = <EditWallets data={userData} discard={e => setEdit(false)} onEdit={e => editHandler(e)} />
    }

    return (
        <SideDrawer active={'Wallets'}>
            <div className={classes.container}>
                <DashboardHeader title={edit ? 'Update Wallets' : 'Wallets'} />
                <div className={classes.top}>
                    <h3>Availiable Balance: <span>${userData.balance}</span></h3>
                    <p>Withdraw funds from your Secure Income Brokers account straight to your crypto wallet</p>
                </div>
                {loading ? <Loader /> : container}
            </div>
            {walletModal && <DoneModal />}
        </SideDrawer>
    );
}

export default Wallets