import React from 'react';

//styles
import classes from './input.module.css';

function SelectInput({title, onChange}) {
    return (
        <div className={classes.container}>
            <p>{title}</p>
            <select onChange={e => onChange(e.target.value)}>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
            </select>
        </div>
    )
}

export default SelectInput