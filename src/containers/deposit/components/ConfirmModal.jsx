import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

//styles
import classes from './modal.module.css';

//icons
import { FiX } from 'react-icons/fi';
import { Loader } from '../../../components';


function ComfirmModal({plan, amount, coin, close, deposit}) {
    //redux state
    const depositLoading = useSelector(state => state.mainReducer.depositLoading);
    const depositModal = useSelector(state => state.mainReducer.depositModal);

    useEffect(() => {
        if(depositModal){
            close()
        }
    }, [depositModal])

    const Item = ({title, details}) => {
        return(
            <div className={classes.Item}>
                <div className={classes.details_title}>{title}</div>
                <div className={classes.details_main}>{details}</div>
            </div>
        )
    };

    let wallet;
    if(coin === 'Binance'){
        wallet = 'Bin - not availiable at the moment';
    }else if(coin === 'Ethereum'){
        wallet = 'Eth - not availiable at the moment'
    }else if(coin === 'Dogecoin'){
        wallet = 'Doge - not availiable at the moment'
    }else{
        wallet = 'Btc - bc1q0wdfwrkegnd9ytsv00f72l9sv2t8lnc89dn29l'
    }

    let profit;
    if(plan === 'Advance'){
        profit = '30% After 24 Hours'
    }else if(plan === 'Diamond'){
        profit = '50% After 38 Hours'
    }else{
        profit = '7% After 24 Hours'
    };

    let container = (
        <div>
            <div className={classes.backdrop_close} onClick={close}> <FiX /> </div>
            <div className={classes.top}>Confirm Deposit</div>
            <div className={classes.intro}>Make payment into company's wallet address: <span>{wallet}</span></div>
            <div className={classes.details}>
                <Item title={'Plan'} details={plan} />
                <Item title={'Profit'} details={profit} />
                <Item title={'Principal Return'} details={'Yes'} />
                <Item title={'Instant Withdraw'} details={'Availiable'} />
                <Item title={'Credit Amount'} details={`$${amount.toLocaleString()}`} />
                <Item title={'Deposit Fee'} details={'0.00% + $0.00 (min. $0.00 max. $0.00)'} />
            </div>
            <button onClick={deposit} >Confirm Deposit</button>
        </div>
    )

    return (
        <div className={classes.backdrop}>
            <div className={classes.backdrop_main}>
                {depositLoading ? <Loader /> : container }
            </div>
        </div>
    )
}

export default ComfirmModal