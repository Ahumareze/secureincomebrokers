import React from 'react';

//styles
import classes from './video.module.css';

//file
import movie from '../../../../assets/movie.mp4';

function Video() {
    return (
        <div className={classes.container}>
             <video controls style={{width: '100%', height: 500}}>
                <source src={movie} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Video