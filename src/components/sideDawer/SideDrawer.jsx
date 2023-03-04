import React, { useEffect } from 'react';
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

//components
import Loader from '../loader/Loader';

//redux actions
import { logout, setShowDrawer, fetch_data } from '../../redux/actions';


function SideDrawer({children, active}) {
    //initialize
    const dispatch = useDispatch();
    const navigate = useNavigate()

    //redux state
    const showDrawer = useSelector(state => state.mainReducer.showDrawer);
    const loading = useSelector(state => state.mainReducer.loading);
    const userData = useSelector(state => state.mainReducer.userData);

    useEffect(() => {
        dispatch(fetch_data())
    }, [])

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

    const handleLogout = () => {
        dispatch(logout());
    }

    const closeDrawer = () => {
        dispatch(setShowDrawer(false))
    };

    const container = (
        <div className={classes.container}>
            <div className={classes.SideDrawer}>
                <p className={classes.logo}><span>Secure</span> Income Brokers</p>
                <div className={classes.profile}>
                    <img src={userData.img} alt={userData.name} />
                    <h3>{userData.name}</h3>
                    <p>{userData.email}</p>
                </div>
                <div className={classes.linksContainer}>
                    <Link name={'Dashboard'} active={active === 'Dashboard'} path={'/dashboard'}> <MdSpaceDashboard size={20} /> </Link>
                    <Link name={'Deposit'} active={active === 'Deposit'} path={'/deposit'}> <AiFillBank size={20} /> </Link>
                    <Link name={'Withdraw'} active={active === 'Withdraw'} path={'/withdraw'}> <BsCashStack size={20} /> </Link>
                    <Link name={'Transactions'} active={active === 'Transactions'} path={'/transactions'}> <IoMdSwap size={20} /> </Link>
                    <Link name={'Wallets'} active={active === 'Wallets'} path={'/wallets'}> <FaWallet size={20} /> </Link>
                </div>
                <div className={classes.logout_button} onClick={handleLogout} >
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
                            <img src={userData.img} alt={userData.name} />
                            <h3>{userData.name}</h3>
                            <p>{userData.email}</p>
                        </div>
                        <div className={classes.linksContainer}>
                            <Link name={'Dashboard'} active={active === 'Dashboard'} path={'/dashboard'}> <MdSpaceDashboard size={20} /> </Link>
                            <Link name={'Deposit'} active={active === 'Deposit'} path={'/deposit'}> <AiFillBank size={20} /> </Link>
                            <Link name={'Withdraw'} active={active === 'Withdraw'} path={'/withdraw'}> <BsCashStack size={20} /> </Link>
                            <Link name={'Transactions'} active={active === 'Transactions'} path={'/transactions'}> <IoMdSwap size={20} /> </Link>
                            <Link name={'Wallets'} active={active === 'Wallets'} path={'/wallets'}> <FaWallet size={20} /> </Link>
                        </div>
                        <div className={classes.logout_button2} onClick={handleLogout} >
                            <FiLogOut size={18} /> Logout
                        </div>
                    </div>
                </div>
            }
        </div>
    );

    const loader_container = (
        <div className={classes.loader_container}>
            <Loader />
        </div>
    )

    return (
        loading ? loader_container : container 
    )
}

export default SideDrawer