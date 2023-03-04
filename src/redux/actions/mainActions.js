import axios from 'axios';
import * as actionTypes from './actionTypes';
const dbUrl = 'https://incomebrokers-default-rtdb.firebaseio.com/';

export const setShowDrawer = (value) => {
    return{
        type: actionTypes.SETSHOWDRAWER,
        value
    }
};

export const fetch_data = () => {
    return dispatch => {
        dispatch(setLoading(true));

        const email = localStorage.getItem('@localEmail');

        axios.get(dbUrl + '/users.json').then(r => {
            //convert to array and map
            const data = r.data;
            Object.keys(data).map(i => {
                if(email === data[i].email){
                    dispatch(setUserData(data[i]));
                    dispatch(setLoading(false));
                }
            })
        }).catch(e => {
            console.log(e);
            dispatch(setLoading(false));
        })
    };
};

export const setUserData = (value) => {
    return{
        type: actionTypes.SETUSERDATA,
        value
    }
}

const setLoading = (value) => {
    return{
        type: actionTypes.SETLOADING,
        value
    }
}