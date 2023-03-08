import React from 'react';

//styles
import classes from './about.module.css';

//images
import aboutImg from '../../../../assets/about.jpeg';
import { useNavigate } from 'react-router-dom';

function About() {
    //initizlize
    const navigate = useNavigate();

    return (
        <div className={classes.container}>
            <div className={classes.mainContainer}>
                <h1>About <span>Secure Income Brokers</span></h1>
                <p>Secure Income Brokers Investment Ltd brings together a community of traders and qualified investors dedicating to creating a beneficial and profitable environment for our members. Our achievements and experience of our specialists allowed us to quickly take a confident position in the market, carry out successful transactions and make a profit. It allowed us to create not only a more significant amount of liquidity, but also to organize a stabilization fund in case of drawdowns.</p>
                <button onClick={() => navigate('/about')}>Learn More</button>
            </div>
            <img src={aboutImg} className={classes.aboutImg} alt='About-img' />
        </div>
    )
}

export default About