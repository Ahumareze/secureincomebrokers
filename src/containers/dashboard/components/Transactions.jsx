import React from 'react';

//components
import { TransactionItem } from '../../../components';

//styles
import classes from '../dashboard.module.css';

function Transactions({data, onSelect}) {
    return (
        <div className={classes.transactions}>
            <div className={classes.transactions_top}>
                <h2>Transactions</h2>
                <button>View All</button>
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
                <div>
                    {data.map((i, idx) => (
                        <TransactionItem
                            key={idx}
                            sn={idx + 1}
                            name={i.coin}
                            type={i.type}
                            amount={i.amount}
                            status={i.status}
                            onSelect={() => onSelect(i)}
                        />
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Transactions