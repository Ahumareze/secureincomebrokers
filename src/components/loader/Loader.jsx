import React from 'react';

//styles
import classes from './loader.module.css';

function Loader() {
    return (
        <div className={classes.container}>
            <div className={classes.lds_ring}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader