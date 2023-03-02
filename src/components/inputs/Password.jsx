import React, { useState } from 'react';

//styles
import classes from './input.module.css';

//icons
import { FiEyeOff, FiEye } from 'react-icons/fi';

function Password({onChange, value}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={classes.password}>
            <p>Password</p>
            <div className={classes.password_main}>
                <input type={showPassword ? 'text' : 'password'} onChange={e => onChange(e.target.value)} value={value} />
                <div onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} /> }
                </div>
            </div>
        </div>
    )
}

export default Password