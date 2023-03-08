import React, { useState } from 'react';
import { motion } from 'framer-motion';
import classes from './coursel.module.css';

//images
import service1 from '../../../../assets/service1.jpeg';
import service2 from '../../../../assets/service2.jpeg';
import service3 from '../../../../assets/service3.jpeg';

//icons
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';

const frames = [
  { id: 1, title: 'Secured Crypto Investing', content: "Join the world most comprehensive and secured Blockchain investment platform with over 9.4 million investors and start investing.", img: 'https://www.niveshmarket.com/wp-content/uploads/2021/02/become-a-Forex-trader.jpg' },
  { id: 2, title: 'Secured and Easy way to Invest your Crypto assets', content: "Proposed modalities for strengthening cooperation will be accepted by anyone who uses cryptocurrency and knows about it's fantastic prospects", img: 'https://www.ironfx.com/wp-content/uploads/2022/12/tips-forex-trader-investor.jpg' },
  { id: 3, title: 'Reliable and Profitable Investment', content: "Investors with little to no trading experience are successfully making profits", img: 'https://www.forexfactory.com/attachment/image/2532888/thumbnail?d=1508945400' },
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

const Coursel = ({open}) => {
  //initialize
  const navigate = useNavigate();

  //UI state
  const [currentFrame, setCurrentFrame] = useState(0);

  const handleBack = () => {
    setCurrentFrame(currentFrame === 0 ? frames.length - 1 : currentFrame - 1);
  };

  const handleForward = () => {
    setCurrentFrame(currentFrame === frames.length - 1 ? 0 : currentFrame + 1);
  };

  const Button = () => {
    return(
      <div className={classes.videoPlay} onClick={open}>
        <FaPlay />
      </div>
    )
  }

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
                <div className={classes.items_container}>
                    <Button />
                    <h1>{frames[currentFrame].title}</h1>
                    <p>{frames[currentFrame].content}</p>
                    <button onClick={() => navigate('/register')}>Get Started</button>
                </div>
            </div>
        </motion.div>
        <div className={classes.backButton} onClick={handleBack} > <FiChevronLeft size={25} /> </div>
        <div className={classes.nextButton} onClick={handleForward}> <FiChevronRight size={25} /> </div>
    </div>
  );
};

export default Coursel;
