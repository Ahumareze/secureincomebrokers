import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//styles
import classes from './register.module.css';

//components
import { Header, Input, Loader, Password, SelectInput } from "../../components";

//redux actions
import { register } from "../../redux/actions";
import EmailModal from "./components/EmailModal";
import { countries } from "../../data";

const Register = () => {
    //initialize
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //form state
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState('United States of America');
    const [password, setPassword] = useState();

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
            <Header active={'Register'} />
            <div className={classes.container}>
                {loading ? <Loader /> : container }
                <div className={classes.canva}>
                    <div className={classes.canva_backdrop}>
                        <div>
                            <h2>Secure Income Brokers</h2>
                            <p>Here is a dummy text about secure income brokers</p>
                        </div>
                    </div>
                </div>
            </div>
            {emailModal && <EmailModal email={emailModal} />}
        </div>
    )
};

export default Register