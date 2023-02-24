import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import classes from './login.module.css';

//components
import { Header, Input, Password, SelectInput } from "../../components";

function Login() {
    //initialize
    const navigate = useNavigate();
    
    //form state
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <Header active={'Login'} />
            <div className={classes.container}>
                <div>
                    <div className={classes.formContainer}>
                        <h2>Sign In</h2>
                        <p className={classes.intro_text}>Welcome back, sign in to continue</p>
                        <div className={classes.inputsContainer}>
                            <Input title={'Email'} type='email' onChange={e => setEmail(e)} />
                            <Password onChange={e => setPassword(e)} />
                        </div>
                        <button>Sign In</button>
                        <p className={classes.loginLink} onClick={() => navigate('/register')} >Don't have an account? <span>Signup instead</span></p>
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
}

export default Login