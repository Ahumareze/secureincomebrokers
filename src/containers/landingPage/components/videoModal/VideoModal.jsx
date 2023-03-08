import React from 'react';

//styles
import classes from './videomodal.module.css';

//icons
import { FiX } from 'react-icons/fi';

//file
import movie from '../../../../assets/movie2.mp4';

function VideoModal({close}) {
    return (
        <div className={classes.backdrop}>
            <div className={classes.container}>
                <div className={classes.close} onClick={close}><FiX /></div>
                <div className={classes.mainContainer}>
                    <video controls style={{width: '100%'}}>
                        <source src={movie} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                
            </div>
        </div>
    )
}

export default VideoModal