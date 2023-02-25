import * as actionTypes from './actionTypes';

export const register = (name, email, password, country) => {
    return dispatch => {
        console.log({name, email, password, country})
    }
};