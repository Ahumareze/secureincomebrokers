import React from 'react';
import { FiDownload, FiUpload, FiX } from 'react-icons/fi';

//styles
import classes from './transactionmodal.module.css';

function TransactionModal({data, close, userId}) {

    const Item = ({title, content}) => {
        return(
            <div className={classes.detail}>
                <div>{title}</div>
                <div>{content}</div>
            </div>
        )
    };

    let status_container = <div className={classes.pending}>{data.status}</div>;
    if(data.status === 'failed'){
        status_container = <div className={classes.failed}>{data.status}</div>
    }else if(data.status === 'success'){
        status_container = <div className={classes.success}>{data.status}</div>
    }

    let icon = <div className={classes.icon}> <FiDownload size={40} /> </div>;
    if(data.type !== 'deposit'){
        icon = <div className={classes.icon_withdraw}> <FiUpload size={40} /> </div>;
    }
    
    return (
        <div className={classes.backdrop}>
            <div className={classes.container}>
                <div className={classes.close} onClick={close}> <FiX /> </div>
                <div className={classes.top}>Transaction Details</div>
                <div className={classes.main_top}>
                    {icon}
                    <h2>${(data.amount).toLocaleString()}</h2>
                </div>
                <div className={classes.main_container}>
                    <Item title={'Transaction'} content={data.coin} />
                    <Item title={'Type'} content={data.type} />
                    <Item title={'User Id.'} content={userId} />
                    <Item title={'Date'} content={data.date} />
                    <Item title={'Status'} content={status_container} />
                    <button onClick={close}>Done</button>
                </div>
            </div> 
        </div>
    );
}

export default TransactionModal