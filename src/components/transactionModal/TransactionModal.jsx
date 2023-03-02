import React from 'react';
import { FiDownload, FiX } from 'react-icons/fi';

//styles
import classes from './transactionmodal.module.css';

function TransactionModal() {

    const Item = ({title, content}) => {
        return(
            <div className={classes.detail}>
                <div>{title}</div>
                <div>{content}</div>
            </div>
        )
    };
    return (
        <div className={classes.backdrop}>
            <div className={classes.container}>
                <div className={classes.close}> <FiX /> </div>
                <div className={classes.top}>Transaction Details</div>
                <div className={classes.main_top}>
                    <div className={classes.icon}> <FiDownload size={40} /> </div>
                    <h2>$500.00</h2>
                </div>
                <div className={classes.main_container}>
                    <Item title={'Transaction'} content={'Bitcoin'} />
                    <Item title={'Type'} content={'Deposit'} />
                    <Item title={'Ref no.'} content={'7875213214924'} />
                    <Item title={'Date'} content={'14th, April 2023'} />
                    <Item title={'Status'} content={<div className={classes.pending}>Pending</div>} />
                    <button>Done</button>
                </div>
            </div>
        </div>
    );
}

export default TransactionModal