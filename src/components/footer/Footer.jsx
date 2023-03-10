import React from 'react';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';

//styles
import classes from './footer.module.css';

function Footer() {
    
    return (
        <div className={classes.container}>
            <div className={classes.newsLetter}>
                <h1>Join Our Newsletter</h1>
                <div className={classes.inputContainer}>
                    <input placeholder='enter your email' />
                    <button>Subscribe</button>
                </div>
                <div className={classes.contact}>
                    <div className={classes.phone}> <FiPhoneCall /> </div>
                    <p>+1 (657) 534-9439</p>
                </div>
                <div className={classes.contact}>
                    <div className={classes.map}> <FiMapPin /> </div>
                    <p>70 BANKSIA ST, POINT VERMON QLD 4655, AUSTRALIAN</p>
                </div>
                <div className={classes.contact}>
                    <div className={classes.mail}> <FiMail /> </div>
                    <p>securedincomebroker@gmail.com</p>
                </div>
                <p className={classes.copyright}>Copyright© 2023 www.secureincomebrokers.com, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer