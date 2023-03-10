import React, { useEffect, useState } from 'react';

//styles
import classes from './reviews.module.css';

//data
import { review } from '../../../../data';

function Reviews() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [number, setNumber] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % review.length);
        }, 5000);
    
        return () => {
          clearInterval(intervalId);
        };
    }, [review.length]);

    const Item = ({review, name, image, active}) => {
        return(
            <div className={`${classes.Item} ${active && classes.active}`}>
                <p className={classes.review}>{review}</p>
                <div>
                    <img src={image} alt='name' />
                    <p className={classes.name}>{name}</p>
                </div>
            </div>
        )
    };

    const Tracker = () => {
        return(
            <div className={classes.Tracker}>
                {review.map((i, idx) => (
                    <div className={`${classes.Tracker_item} ${activeIndex === idx && classes.Tracker_active}`} key={idx} />
                ))}
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <h1>Reviews and <span>Testimonials</span></h1>
            <div className={classes.mainContainer}>
                {review.map((i, idx) => (
                    <Item 
                        review={i.review} 
                        name={i.name} 
                        image={i.img}
                        key={idx}
                        active={activeIndex === idx}
                    />
                ))}
                
                <Tracker />
            </div>
        </div>
    )
}

export default Reviews