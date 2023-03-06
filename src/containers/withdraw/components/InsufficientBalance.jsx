import React from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import classes from '../withdraw.module.css';

//images
import creditCard from '../../../assets/credit-card.png';


function InsufficientBalance() {
    //initialize
    const navigate = useNavigate();

    return (
        <div className={classes.InsufficientBalance}>
            <img src={creditCard} alt='' />
            <h3>Insufficient Balance</h3>
            <p>Your account is not yet eligible for withdrawals yet</p>
            <button onClick={() => navigate('/deposit')}>Make a deposit</button>
        </div>
    )
}

export default InsufficientBalance