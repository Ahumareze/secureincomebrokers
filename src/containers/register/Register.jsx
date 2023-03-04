import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//styles
import classes from './register.module.css';

//components
import { Header, Input, Loader, Password, SelectInput, SideBar } from "../../components";

//redux actions
import { register } from "../../redux/actions";
import EmailModal from "./components/EmailModal";
import { countries } from "../../data";

const backdrop_img = 'https://cdn01.alison-static.net/careers/career/Stock%20Trader.jpg'

const Register = () => {
    //initialize
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //form state
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState('United States of America');
    const [password, setPassword] = useState();

    //UI state
    const [showSidebar, setShowSidebar] = useState(false);

    //redux state
    const loading = useSelector(state => state.mainReducer.loading);
    const emailModal = useSelector(state => state.mainReducer.emailModal);

    const handleRegister = () => {
        dispatch(register(name, email, password, country));
    };

    const container = (
        <div>
            <div className={classes.formContainer}>
                <h2>Create Account</h2>
                <p className={classes.intro_text}>Create an account and get started</p>
                <div className={classes.inputsContainer}>
                    <Input title={'Fullname'} type='text' onChange={e => setName(e)} value={name} />
                    <Input title={'Email'} type='email' onChange={e => setEmail(e)} value={email} />
                    <SelectInput title={'Country'} onChange={e => setCountry(e)} data={countries} value={'United States of America'} />
                    <Password onChange={e => setPassword(e)} value={password} />
                </div>
                <button onClick={handleRegister}>Create account</button>
                <p className={classes.loginLink} onClick={() => navigate('/login')} >Already have an account? <span>Login instead</span></p>
            </div>
        </div>
    )

    return(
        <div>
            <Header active={'Register'} open={() => setShowSidebar(true)} />
            <div className={classes.container}>
                {loading ? <Loader /> : container }
                <div className={classes.canva} style={{backgroundImage: `url(${backdrop_img})`}}>
                    <div className={classes.canva_backdrop}>
                        <div>
                            <h2><span>Secure</span> Income Brokers</h2>
                            <p>Our company offers trust assets management of the highest quality on the basis of foreign exchange and profitable trade through crypto exchanges</p>
                        </div>
                    </div>
                </div>
            </div>
            {emailModal && <EmailModal email={emailModal} />}
            {showSidebar && <SideBar close={() => setShowSidebar(false)}  />}
        </div>
    )
};

export default Register