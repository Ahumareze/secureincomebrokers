import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

//styles
import classes from './dashboardheader.module.css';

//redux actions
import { setShowDrawer } from '../../redux/actions';

function DashboardHeader({title}) {
    //initialize
    const dispatch = useDispatch();

    return (
        <div className={classes.container}>
            <h2>{title}</h2>
            <div className={classes.menu} onClick={() => dispatch(setShowDrawer(true))} >
                <FiMenu />
            </div>
        </div>
    )
}

export default DashboardHeader