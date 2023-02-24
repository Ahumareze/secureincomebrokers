import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//styles
import classes from './register.module.css';

//components
import { Header, Input, Password, SelectInput } from "../../components";

const Register = () => {
    //initialize
    const navigate = useNavigate();

    //form state
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();
    const [password, setPassword] = useState();

    return(
        <div>
            <Header active={'Register'} />
            <div className={classes.container}>
                <div>
                    <div className={classes.formContainer}>
                        <h2>Create Account</h2>
                        <p className={classes.intro_text}>Create an account and get started</p>
                        <div className={classes.inputsContainer}>
                            <Input title={'Fullname'} type='text' onChange={e => setName(e)} />
                            <Input title={'Email'} type='email' onChange={e => setEmail(e)} />
                            <SelectInput title={'Country'} onChange={e => setCountry(e)} />
                            <Password onChange={e => setPassword(e)} />
                        </div>
                        <button>Create account</button>
                        <p className={classes.loginLink} onClick={() => navigate('/login')} >Already have an account? <span>Login instead</span></p>
                    </div>
                </div>
                <div className={classes.canva}>
                    <div className={classes.canva_backdrop}>
                        <div>
                            <h2>Secure Income Brokers</h2>
                            <p>Here is a dummy text about secure income brokers</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Register