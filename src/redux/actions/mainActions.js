import * as actionTypes from './actionTypes';

export const setShowDrawer = (value) => {
    return{
        type: actionTypes.SETSHOWDRAWER,
        value
    }
}