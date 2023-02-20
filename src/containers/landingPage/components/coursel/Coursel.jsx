import React, { useState } from 'react';
import { motion } from 'framer-motion';
import classes from './coursel.module.css';

//images
import service1 from '../../../../assets/service1.jpeg';
import service2 from '../../../../assets/service2.jpeg';
import service3 from '../../../../assets/service3.jpeg';

//icons
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const frames = [
  { id: 1, content: "This is frame 1", img: service1 },
  { id: 2, content: "This is frame 2", img: service2 },
  { id: 3, content: "This is frame 3", img: service3 },
];

const variants = {
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Coursel = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  const handleBack = () => {
    setCurrentFrame(currentFrame === 0 ? frames.length - 1 : currentFrame - 1);
  };

  const handleForward = () => {
    setCurrentFrame(currentFrame === frames.length - 1 ? 0 : currentFrame + 1);
  };

  return (
    <div className={classes.coursecontainer}>
        <motion.div
            className={classes.framecontainer}
            style={{backgroundImage: `url(${frames[currentFrame].img})`}}
            key={frames[currentFrame].id}
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
        >
            <div className={classes.mainContainer}>
                <div>
                    <h1>Welcome To secure Income Brokers</h1>
                    <p>Here at secure income brokers we focus on investing our clients money in crypto, that's why we are the best at what we do in this industry</p>
                    <button>Get Started</button>
                </div>
            </div>
        </motion.div>
        <div className={classes.backButton} onClick={handleBack} > <FiChevronLeft size={25} /> </div>
        <div className={classes.nextButton} onClick={handleForward}> <FiChevronRight size={25} /> </div>
    </div>
  );
};

export default Coursel;
