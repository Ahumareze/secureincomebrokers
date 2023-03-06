import React from 'react';

//styles
import classes from  '../withdraw.module.css';

function Wallet({name, img, address, onSelect, active}) {

    function shortenText(text) {
        if (text.length > 30) {
          return text.slice(0, 30) + '...';
        }
        return text;
    };

    return (
        <div className={`${classes.walletItem} ${active && classes.active_walletItem}`} onClick={() => onSelect({name, address})}>
            <div className={classes.wallet_top}>
                <img src={img} alt='name' />
                <p>{name} wallet address</p>
            </div>
            <p className={classes.wallet_address}>{shortenText(address)}</p>
        </div>
    )
}

export default Wallet