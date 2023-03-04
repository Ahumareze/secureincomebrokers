import React from 'react';

//styles
import classes from './modal.module.css';

//icons
import { FiX } from 'react-icons/fi';

function ComfirmModal() {

    const Item = ({title, details}) => {
        return(
            <div className={classes.Item}>
                <div className={classes.details_title}>{title}</div>
                <div className={classes.details_main}>{details}</div>
            </div>
        )
    };

    return (
        <div className={classes.backdrop}>
            <div className={classes.backdrop_main}>
                <div className={classes.backdrop_close}> <FiX /> </div>
                <div className={classes.top}>Confirm Deposit</div>
                <div className={classes.intro}>Make payment into company's wallet address: <span>1F4h7nbQjY8MFTeEhnzs6KjDYuL3Ji5xqk</span></div>
                <div className={classes.details}>
                    <Item title={'Plan'} details={'Basic'} />
                    <Item title={'Profit'} details={'25.00% after 30 hours'} />
                    <Item title={'Principal Return'} details={'Yes'} />
                    <Item title={'Principal Withdraw'} details={'Not available'} />
                    <Item title={'Credit Amount'} details={'$700.00'} />
                    <Item title={'Deposit Fee'} details={'0.00% + $0.00 (min. $0.00 max. $0.00)'} />
                </div>
                <button>Confirm Deposit</button>
            </div>
        </div>
    )
}

export default ComfirmModal