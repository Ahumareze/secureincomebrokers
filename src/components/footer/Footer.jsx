import React from 'react';

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
            </div>
        </div>
    )
}

export default Footer