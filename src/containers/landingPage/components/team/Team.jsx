import React from 'react';

//styles
import classes from './team.module.css';

//data
import { team } from '../../../../data';

function Team() {

    const Service = ({img, title, details}) => {
        return(
            <div className={classes.service}>
                <img src={img} alt='service' />
                <div className={classes.title}>{title}</div>
                <p className={classes.details}>{details}</p>
            </div>
        )
    };

    return (
        <div className={classes.contianer}>
            <h1> <span>Our</span> Team</h1>
            <p className={classes.intro}>Meet the brains behind Secure Income Brokers</p>
            <div className={classes.mainContainer}>
                {team.map((i, idx) => (
                    <Service 
                        img={i.img}
                        title={i.name}
                        details={i.writeup}
                        key={idx}
                    />
                ))}
            </div>
        </div>
    )
}

export default Team