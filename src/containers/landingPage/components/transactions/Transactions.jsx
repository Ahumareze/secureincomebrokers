import React, { useEffect, useState } from 'react';

//styles
import classes from './transactions.module.css';

//icons
import { GoCheck } from 'react-icons/go';

const data = [
    {amount: 400, wallet: '0x3A0C0b1e17B3D3Bac4e34D65f6c4f4a4Fb44d0Bc'},
    {amount: 3300, wallet: '3a17c5984af22cd7a443f14457841b3b19a51ea75a30e18bc6a82e4f8732dbca'},
    {amount: 750, wallet: '0x2F1C65a46CE9DdE83600b4Ab4Bf4BBce291d9376'},
    {amount: 2900, wallet: 'aa14458f8082d9c4265ef491ca0b5d4801c16bbf7a4aece7b70a0b4824ffdfea'},
    {amount: 10000, wallet: '0x0Bb7cEDd57F3b8D3F3EAb73fC9d2FE174fCCD25b'},
    {amount: 4400, wallet: '0x6929f9ECfeE8268B079c7Cf3E386CE2BB27b7108'},
    {amount: 3950, wallet: '0xB09BB9f215d0c0a5D5b5E16a614e0D6F59c1f3a6'},
    {amount: 8000, wallet: '0x693ec8A04A6CdaF685aE51A0FE1A78674e772692'},
    {amount: 1000, wallet: '0x1fC3b3a02D3A83AaB51dD9431c6218fF840dd2b2'},
    {amount: 1200, wallet: '0x3Aa3D3Ff27F0c49bC69DF95fB1e10A1EaB9fD9e8'},
    {amount: 51000, wallet: '0x9471d4e4b4d788BB8f73967DD173aE8607f9D6f2'},
    {amount: 4450, wallet: '0x6a66cC1d5C5e56Ec5D5bbdFDf7a9F9bBdBc5BC5C'},
]

function Transactions() {
    const [list, setList] = useState(data);

    useEffect(() => {
        const intervalId = setInterval(() => {
          // Remove the first item from the list and add it to the end
          const newList = [...list];
          const firstItem = newList.shift();
          newList.push(firstItem);
          setList(newList);
        }, 20000); // Change this value to adjust the animation speed
      
        return () => clearInterval(intervalId);
    }, [list]);

    const Item = ({amount, wallet, status}) => {
        return(
            <div className={classes.Item}>
                <div className={classes.button}> <GoCheck /> Success </div>
                <div className={classes.amount}>${amount.toLocaleString()}</div>
                <div>{wallet}</div>
            </div>
        )
    };

    return (
        <div className={classes.container}>
            <h1><span>Deposits</span> / Withdrawals</h1>
            <div className={classes.mainContainer}>
                {list.map((i, idx) => (
                    <Item amount={i.amount} wallet={i.wallet} key={idx} />
                ))}
                
            </div>
        </div>
    )
};

export default Transactions