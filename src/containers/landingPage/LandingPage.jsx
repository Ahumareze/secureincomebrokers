import React, { useEffect, useState } from 'react';

//components
import { Footer, Header, SideBar, SliderWidget, TradingWidget } from '../../components';
import { About, Coursel, NewTransaction, PlansUpdate, Reviews, Services, Stats, Team, Transactions, Video, VideoModal } from './components';

//styles
import classes from './landingpage.module.css';

//data
import { newTransaction } from '../../data';

function LandingPage() {
    //UI state
    const [showSidebar, setShowSidebar] = useState(false);
    const [playVideo, setPlayVideo] = useState(false);
    const [currentItem, setCurrentItem] = useState(newTransaction[0]);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentItem(prevItem => {
            const currentIndex = newTransaction.indexOf(prevItem);
            const nextIndex = currentIndex === newTransaction.length - 1 ? 0 : currentIndex + 1;
            return newTransaction[nextIndex];
          });
        }, 6000);
    
        return () => clearInterval(intervalId);
      }, [newTransaction]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowModal(!showModal);
        }, 5900);
    
        return () => clearInterval(intervalId);
      }, [showModal]);

    useEffect(() => {
        alert('Welcome to secureincomebrokers.com when you introduce 3 of your friends you get $1,000 instantly to your wallet address')
    }, [])

    return (
        <div className={classes.container}>
            <Header active={'Home'} open={() => setShowSidebar(true)}/>
            <Coursel open={() => setPlayVideo(true)} />
            <SliderWidget />
            <About />
            <Services />
            <TradingWidget />
            <PlansUpdate />
            <Video />
            <Transactions />
            <Team />
            <Reviews />
            <Stats />
            <Footer />
            {showSidebar && <SideBar close={() => setShowSidebar(false)}  />}
            {playVideo && <VideoModal close={() => setPlayVideo(false)} /> }
            {showModal && <NewTransaction name={currentItem.name} amount={currentItem.amount} type={currentItem.type} />}
        </div>
    )
}

export default LandingPage