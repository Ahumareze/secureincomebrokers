import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//styles
import classes from '../register.module.css';

import done from '../../../assets/done.gif';
import { FiX } from 'react-icons/fi';

//redux actions
import { setEmailModal } from '../../../redux/actions';


function EmailModal({email}) {
    //initialize
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const doneHandler = () => {
        dispatch(setEmailModal(null));
        navigate('/login')
    };

    const closeHandler = () => {
        dispatch(setEmailModal(null))
    }

    return (
        <div className={classes.emailModal}>
            <div className={classes.emailModal_main}>
                <img src={done} alt='done' />
                <p className={classes.emailModal_title}>Signup Successful</p>
                <p className={classes.EmailModal_text}>An email was sent to <span>{email}</span> verify your email to continue.</p>
                <button onClick={doneHandler}>Back to Login</button>
                <div className={classes.emailModal_close} onClick={closeHandler}> <FiX /> </div>
            </div>
        </div>
    )
}

export default EmailModal