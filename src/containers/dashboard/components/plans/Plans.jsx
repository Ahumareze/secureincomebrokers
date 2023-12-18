import React from 'react';
import { useNavigate } from 'react-router-dom';
import { percentage } from '../../../../helpers';

//styles
import classes from './plans.module.css';

const plan1 = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnhty-u2Ux_cuM1yRVxN5mLrrTlpn0Y5kYw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSey92a9obZmUrKjrJVvex4Zpz17uYHXxcpRQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAPmEv0swP9Mwv3lhmuomnYj057jV99FgxVciAoA-kC2eipgXw-iRtGtE7JYr7BWc-tE&usqp=CAU']
const plan2 = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWY5CbCnxjnzKZuN1M8XW45_kDymD2ane32ywSeCjkM24iEqBMU3zISCq6t65u0-4WDQ&usqp=CAU', 'https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.jpg?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdMDmOdP6ZFjB2JCd0Pr-RX82XCCnKj5lx7Q&usqp=CAU'];
const plan3 = ['https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2022/04/dougwhiteman-scaled.jpeg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZNAMTsV7s2WDnOFZsYVfORW-ec6bABbdI8hYAG0x1zd10j-AArrhq6Jenro56tvodZo&usqp=CAU', 'https://www.uchastings.edu/wp-content/uploads/2022/10/julie-parker.jpg'];

function Plans({data}) {
    //initialize
    const navigate = useNavigate();

    const Plan = ({icon, color, name, writeUp, range, images, users, amount}) => {
        const originalLength = percentage(amount, range[0], range[1]);

        let length;
        if(originalLength < 10){
            length = `5%`
        }else{
            length = `${originalLength}%`
        }
        return(
            <div className={classes.Plan}>
                <div className={classes.top}>
                    <div className={classes.icon} style={{backgroundColor: color}}>{icon}</div>
                    <div className={classes.name}>{name}</div>
                </div>
                <div className={classes.intro}>{writeUp}</div>
                <div className={classes.main}>
                    <div className={classes.pole}> <div style={{backgroundColor: color, width: length}} /> </div>
                    <div className={classes.amount}>
                        <div>{range[0]}</div>
                        <div>{range[1]}</div>
                    </div>
                </div>
                <div className={classes.bottom}>
                    <button onClick={() => navigate('/deposit')} >Invest</button>
                    <div className={classes.investors}>
                        <p>{(users).toLocaleString()}+</p>
                        <div className={classes.images}>
                            <img src={images[0]} alt='investor' />
                            <img src={images[1]} alt='investor' />
                            <img src={images[2]} alt='investor' />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
    
    return (
        <div className={classes.container}>
            <h2>Plans</h2>
            <div className={classes.mainContainer}>
                <Plan icon={'🚀'} color={'cyan'} name={'Basic'} range={['$500', '$999']} amount={data.basic_plan} images={plan1} users={1843} writeUp={'Invest a minumum of $500 and earn at an interest of 7% after 24 hours'} />
                <Plan icon={'🔥'} color={'paleGreen'} name={'Advance'} range={['$5,000', 'Unlimited']} amount={data.advance_plan} images={plan2} users={406} writeUp={'Invest a minumum of $5000 and earn at an interest of 15% after 24 hours'}/>
                <Plan icon={'💎'} color={'rgb(255, 214, 239)'} name={'Premium'} range={['$25,000', 'Unlimited']} amount={data.diamond_plan} images={plan3} users={119} writeUp={'Invest a minumum of $25,000 and earn at an interest of 30% after 38 hours'} />
            </div>
        </div>
    )
};
export default Plans