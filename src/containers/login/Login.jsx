import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//styles
import classes from './login.module.css';

//components
import { Header, Input, Loader, Password, SideBar } from "../../components";

//redux actions
import { login } from '../../redux/actions';

const backdrop_img = 'https://cdn01.alison-static.net/careers/career/Stock%20Trader.jpg'

function Login() {
    //initialize
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //UI state
    const [showSidebar, setShowSidebar] = useState(false);
    
    //form state
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //redux state
    const loading = useSelector(state => state.mainReducer.loading);
    const authError = useSelector(state => state.authReducer.authError);

    const submitHandler = () => {
        dispatch(login(email, password))
    };

    const container = (
        <div>
            <div className={classes.formContainer}>
                <h2>Sign In</h2>
                <p className={classes.intro_text}>Welcome back, sign in to continue</p>
                <div className={classes.inputsContainer}>
                    <Input title={'Email'} type='email' onChange={e => setEmail(e)} value={email} />
                    <Password onChange={e => setPassword(e)} value={password} />
                    {authError && <p style={{margin: 0, color: 'red', fontSize: 14}}>{authError}</p>}
                </div>
                <button onClick={submitHandler}>Sign In</button>
                <p className={classes.loginLink} onClick={() => navigate('/register')} >Don't have an account? <span>Signup instead</span></p>
            </div>
        </div>
    )

    return (
        <div>
            <Header active={'Login'} open={() => setShowSidebar(true)} />
            <div className={classes.container}>
                {loading ? <Loader /> : container}
                <div className={classes.canva} style={{backgroundImage: `url(${backdrop_img})`}}>
                    <div className={classes.canva_backdrop}>
                        <div>
                            <h2><span>Secure</span> Income Brokers</h2>
                            <p>Our company offers trust assets management of the highest quality on the basis of foreign exchange and profitable trade through crypto exchanges</p>
                        </div>
                    </div>
                </div>
            </div>
            {showSidebar && <SideBar close={() => setShowSidebar(false)}  />}
        </div>
    )
}

export default Login