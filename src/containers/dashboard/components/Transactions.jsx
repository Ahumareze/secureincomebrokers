import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import { TransactionItem } from '../../../components';

//images
import emptyfolder from '../../../assets/empty-folder.png';

//styles
import classes from '../dashboard.module.css';

function Transactions({data, onSelect}) {
    //navigate
    const navigate = useNavigate();

    let container;

    if(data){
        container = (
            <div>
                {data.map((i, idx) => (
                    <TransactionItem
                        key={idx}
                        sn={idx + 1}
                        name={i.coin}
                        type={i.type}
                        amount={i.amount}
                        status={i.status}
                        date={i.date}
                        onSelect={() => onSelect(i)}
                    />
                ))}
            </div>
        )
    }else{
        container = (
            <div className={classes.empty_transactions}>
                <div>
                    <img src={emptyfolder} alt='emptyfolder' />
                    <p className={classes.empty_transactions_title}>No Transactions Yet</p>
                    <p className={classes.empty_transactions_details}>You haven't performed a transaction on this account yet</p>
                </div>
            </div>
        )
    };

    return (
        <div className={classes.transactions}>
            <div className={classes.transactions_top}>
                <h2>Transactions</h2>
                <button onClick={() => navigate('/transactions')}>View All</button>
            </div>
            <div className={classes.transactions_container}>
                <div className={classes.transactions_header}>
                    <div className={classes.transactions_header_sn}>SN</div>
                    <div>Transaction</div>
                    <div className={classes.transactions_header_type}>Type</div>
                    <div className={classes.transactions_header_amount}>Amount</div>
                    <div className={classes.transactions_header_status}>status</div>
                    <div className={classes.transactions_header_date}>date</div>
                </div>
                {container}
                
            </div>
        </div>
    )
}

export default Transactions