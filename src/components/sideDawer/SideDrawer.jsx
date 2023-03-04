import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//styles
import classes from './sidedrawer.module.css';

//icons
import { MdSpaceDashboard } from 'react-icons/md';
import { AiFillBank } from 'react-icons/ai';
import { BsCashStack } from 'react-icons/bs';
import { IoMdSwap } from 'react-icons/io';
import { FaWallet } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

//redux actions
import { setShowDrawer } from '../../redux/actions';


function SideDrawer({children, active}) {
    //initialize
    const dispatch = useDispatch();
    const navigate = useNavigate()

    //redux state
    const showDrawer = useSelector(state => state.mainReducer.showDrawer);

    const handleNavigate = (to) => {
        dispatch(setShowDrawer(false));
        navigate(to)
    }

    const Link = ({name, children, active, path}) => {
        return(
            <div className={`${classes.Link} ${active && classes.active}`} onClick={() => handleNavigate(path)} >
                {children}
                {name}
            </div>
        )
    };

    const closeDrawer = () => {
        dispatch(setShowDrawer(false))
    }

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
                    <Link name={'Dashboard'} active={active === 'Dashboard'} path={'/dashboard'}> <MdSpaceDashboard size={20} /> </Link>
                    <Link name={'Deposit'} active={active === 'Deposit'} path={'/deposit'}> <AiFillBank size={20} /> </Link>
                    <Link name={'Withdraw'} active={active === 'Withdraw'} path={'/withdraw'}> <BsCashStack size={20} /> </Link>
                    <Link name={'Transactions'} active={active === 'Transactions'} path={'/transactions'}> <IoMdSwap size={20} /> </Link>
                    <Link name={'Wallets'} active={active === 'Wallets'} path={'/wallets'}> <FaWallet size={20} /> </Link>
                </div>
                <div className={classes.logout_button}>
                    <FiLogOut size={18} /> Logout
                </div>
            </div>
            {children}
            {showDrawer && 
                <div className={classes.mobile_sideDrawer}>
                    <div className={classes.mobile_sideDrawer_close} onClick={closeDrawer} />
                    <div className={classes.mobile_sideDrawer_main}>
                        <p className={classes.logo2}><span>Secure</span> Income Brokers</p>
                        <div className={classes.profile}>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/191125_Lil_Nas_X_at_the_2019_American_Music_Awards.png/640px-191125_Lil_Nas_X_at_the_2019_American_Music_Awards.png' />
                            <h3>Ifeanyi Ahumareze</h3>
                            <p>ifeanyicodes001@gmail.com</p>
                        </div>
                        <div className={classes.linksContainer}>
                            <Link name={'Dashboard'} active={active === 'Dashboard'} path={'/dashboard'}> <MdSpaceDashboard size={20} /> </Link>
                            <Link name={'Deposit'} active={active === 'Deposit'} path={'/deposit'}> <AiFillBank size={20} /> </Link>
                            <Link name={'Withdraw'} active={active === 'Withdraw'} path={'/withdraw'}> <BsCashStack size={20} /> </Link>
                            <Link name={'Transactions'} active={active === 'Transactions'} path={'/transactions'}> <IoMdSwap size={20} /> </Link>
                            <Link name={'Wallets'} active={active === 'Wallets'} path={'/wallets'}> <FaWallet size={20} /> </Link>
                        </div>
                        <div className={classes.logout_button2}>
                            <FiLogOut size={18} /> Logout
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SideDrawer