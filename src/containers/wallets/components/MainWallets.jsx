import React from 'react';

//styles
import classes from '../wallets.module.css';

//images
import bitcoin from '../../../assets/crypto/bitcoin.png';
import ethereum from '../../../assets/crypto/ethereum.png';
import dogecoin from '../../../assets/crypto/dogecoin.png';
import binance from '../../../assets/crypto/binance.png';

function MainWallets({edit, data}) {

    function shortenText(text) {
        if (text.length > 30) {
          return text.slice(0, 30) + '...';
        }
        return text;
    };

    const Item = ({name, img, address}) => {
        return(
            <div className={classes.walletItem}>
                <div className={classes.wallet_top}>
                    <img src={img} alt='name' />
                    <p>{name} wallet address</p>
                </div>
                <p className={classes.wallet_address}>{shortenText(address)}</p>
            </div>
        )
    }
    return (
        <div className={classes.MainWallets}>
            <button onClick={edit} className={classes.MainWallets_button}>Update Wallets</button>
            <div className={classes.MainWallets_main}>
                <Item img={bitcoin} name={'Bitcoin'} address={data.bitcoin_address} />
                <Item img={ethereum} name={'Ethereum'} address={data.ethereum_address} />
                <Item img={binance} name={'BNB'} address={data.binance_address} />
                <Item img={dogecoin} name={'Dogecoin'} address={data.dogecoin_address} />
            </div>
            
        </div>
    )
}

export default MainWallets