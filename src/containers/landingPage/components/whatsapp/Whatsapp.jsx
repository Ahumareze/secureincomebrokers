import React from 'react';

//styles
import classes from './whatsapp.module.css';

//icons
import { BsWhatsapp } from 'react-icons/bs';

//constants
const link = 'https://wa.me/+16575349439/';

function Whatsapp() {

    return (
        <div className={classes.container} onClick={() => window.location.href = link}>
            <BsWhatsapp size={22} />    
        </div>
    )
}

export default Whatsapp