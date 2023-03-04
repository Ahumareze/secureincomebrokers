import React from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import classes from './sidebar.module.css';

function SideBar({close}) {
    //navigate
    const navigate = useNavigate();

    const clickHandler = (path) => {
        close();
        navigate(path);
    }

    return (
        <div className={classes.container}>
            <div className={classes.close} onClick={close} />
            <div className={classes.main}>
                <div className={classes.links}>
                    <p onClick={() => clickHandler('/')}>Home</p>
                    <p onClick={() => clickHandler('/about')}>About</p>
                    <p onClick={() => clickHandler('/login')}>Login</p>
                    <p onClick={() => clickHandler('/register')}>Register</p>
                </div>
                <p className={classes.copyright}>Copyright © 2023 www.secureincomebrokers.com</p>
            </div>
        </div>
    )
}

export default SideBar