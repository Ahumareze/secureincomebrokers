import React from 'react';

//styles
import classes from './sidedrawer.module.css';

//icons
import { MdSpaceDashboard } from 'react-icons/md';
import { AiFillBank } from 'react-icons/ai';
import { BsCashStack } from 'react-icons/bs';
import { IoMdSwap } from 'react-icons/io';
import { FaWallet } from 'react-icons/fa';

function SideDrawer({children}) {

    const Link = ({name, children, active}) => {
        return(
            <div className={`${classes.Link} ${active && classes.active}`}>
                {children}
                {name}
            </div>
        )
    };

    return (
        <div className={classes.container}>
            <div className={classes.SideDrawer}>
                <p className={classes.logo}><span>Secure</span> Income Brokers</p>
                <div className={classes.profile}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/191125_Lil_Nas_X_at_the_2019_American_Music_Awards.png/640px-191125_Lil_Nas_X_at_the_2019_American_Music_Awards.png' />
                    <h3>Ifeanyi Ahumareze</h3>
                    <p>ifeanyicodes001@gmail.com</p>
                </div>
                <div className={classes.linksContainer}>
                    <Link name={'Dashboard'} active> <MdSpaceDashboard size={20} /> </Link>
                    <Link name={'Deposit'}> <AiFillBank size={20} /> </Link>
                    <Link name={'Withdraw'}> <BsCashStack size={20} /> </Link>
                    <Link name={'Transactions'}> <IoMdSwap size={20} /> </Link>
                    <Link name={'Wallets'}> <FaWallet size={20} /> </Link>
                </div>
            </div>
            {children}
        </div>
    )
}

export default SideDrawer