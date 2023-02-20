import React from 'react';

//styles
import classes from './header.module.css';

function Header() {
    return (
        <div className={classes.container}>
            <div className={classes.logo}></div>
            <div className={classes.links}>
                <p>Home</p>
                <p>About</p>
                <p>FAQ's</p>
                <p>Contact us</p>
                <p>Login</p>
                <p>Register</p>
            </div>
        </div>
    )
}

export default Header