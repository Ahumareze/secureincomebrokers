import React from 'react';

//styles
import classes from './input.module.css';

function SelectInput({title, onChange, data, value}) {
    return (
        <div className={classes.container}>
            <p>{title}</p>
            <select onChange={e => onChange(e.target.value)} defaultValue={value}>
                {data.map((i, idx) => (
                    <option key={idx}>{i}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput