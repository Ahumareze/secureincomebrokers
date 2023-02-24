import React from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import classes from './header.module.css';

const links = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'FAQs', link: '/faqs'},
    {name: 'Login', link: '/login'},
    {name: 'Register', link: '/register'},
]

function Header({active}) {
    const navigate = useNavigate();

    const navigateHandler = (link) => {
        navigate(link);
    };
    
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <p><span>Secure</span> Income Brokers</p>
            </div>
            <div className={classes.links}>
                {links.map((i, idx) => (
                    <p onClick={() => navigateHandler(i.link)} key={idx} style={active === i.name ? {color: '#0166DA'} : {}}>{i.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Header