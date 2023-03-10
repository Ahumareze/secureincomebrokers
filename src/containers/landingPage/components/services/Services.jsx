import React from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import classes from './services.module.css';

//images
import service1 from '../../../../assets/service1.JPG';
import service2 from '../../../../assets/service2.JPG';
import service3 from '../../../../assets/service3.JPG';

function Services() {
    //initialize
    const navigate = useNavigate();

    const Service = ({img, title, details}) => {
        return(
            <div className={classes.service}>
                <img src={img} alt='service' />
                <div className={classes.title}>{title}</div>
                <p className={classes.details}>{details}</p>
                <p className={classes.link} onClick={() => navigate('/register')}>Learn More</p>
            </div>
        )
    };

    return (
        <div className={classes.contianer}>
            <h1> <span>Why</span> Secure Income Brokers?</h1>
            <p className={classes.intro}>Get started with the easiest and most secure platfom to buy and trade cryptocurrency</p>
            <div className={classes.mainContainer}>
                <Service img={service3} title={'Maximum Protection'} details={'Our website is protected by SSL (Secure Socket Layer). All sensitive information submitted by our clients is automatically transferred by SSL to a secure environment. Our cashier is PCI Level 1 Merchant compliant and ensures that all your data is secured'} />
                <Service img={service1} title={'Investors Workstation'} details={'Our flagship desktop platform designed for active investors who trade multiple products and require power and flexibility'} />
                <Service img={service2} title={'Fast And Automated Payout'} details={'Secure Income Brokers, we believe that nothing should stand in-between you and your money.You are being paid directly on the maturity of the stipulated investment. You profits reaches you before not more than one hours of the time of payment'} />
            </div>
        </div>
    )
}

export default Services