import React from 'react';

//styles
import classes from './input.module.css';

function Input({title, type, onChange, value}) {
    return (
        <div className={classes.container}>
            <p>{title}</p>
            <input type={type} onChange={e => onChange(e.target.value)} defaultValue={value} />
        </div>
    )
}

export default Input