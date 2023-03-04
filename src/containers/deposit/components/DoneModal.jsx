import React from 'react';

//styles
import classes from './modal.module.css';

//icons
import { FiX } from 'react-icons/fi';

//donegif
import done from '../../../assets/done.gif';

function DoneModal() {
    return (
        <div className={classes.backdrop}>
            <div className={classes.backdrop_main}>
                {/* <div className={classes.backdrop_close}><FiX /></div> */}
                <div className={classes.done_container}>
                    <img className={classes.done_img} src={done} alt='' />
                    <p className={classes.done_title}>Deposit placed successfuly 👍</p>
                    <p className={classes.done_main}>Your deposit has been placed and our admins will be notified</p>
                </div>
                <button onClick={() => window.location.reload()}>Return to dashboard</button>
            </div>
        </div>
    )
}

export default DoneModal