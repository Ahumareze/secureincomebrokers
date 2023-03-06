import axios from 'axios';
import * as actionTypes from './actionTypes';

const key = 'AIzaSyAPDYlvbJ8LsPC6M-OPCqwy_ZNw4ZHNric';
const signupurl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + key;
const loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + key;
const verificationEmail = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + key;
const dbUrl = 'https://incomebrokers-default-rtdb.firebaseio.com/';

export const init = () => {
    const localToken = localStorage.getItem('@localToken');
    return dispatch => {
        if(localToken){
            dispatch(setToken(localToken))   
        }else{
            dispatch(setToken(null))
        }
    }
};

export const register = (name, email, password, country) => {
    return dispatch => {
        // console.log({name, email, password, country});

        dispatch(setLoading(true))

        const data = {
            email,
            password,
            returnSecureToken:  true
        }

        axios.post(signupurl, data).then(r => {
            const token = r.data.idToken;
            dispatch(sendEmail(name, email, country, token));
        }).catch(e => {
            // console.log(e);
            if(e.response){
                dispatch(setAuthError(e.response.data.error.message));
            }else{
                dispatch(setAuthError(e.message));
            }
            dispatch(setLoading(false))
        })
    }
};

const sendEmail = (name, email, country, token) => {
    return dispatch => {
        const data = {
            requestType: 'VERIFY_EMAIL',
            idToken: token
        };

        axios.post(verificationEmail, data).then(r => {
            dispatch(postUserData(name, email, country));
        }).catch(e => {
            // console.log(e)
        })
    }
};

const postUserData = (name, email, country) => {
    return dispatch => {
        const data = {
            name,
            email,
            country,
            deposited: 0,
            earned: 0,
            withdrawn: 0,
            basic_plan: 0,
            advance_plan: 0,
            diamond_plan: 0,
            img: 'https://i.pinimg.com/474x/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855--milk-tart-entertaiment-news.jpg',
            bitcoin_address: 'update your bitcoin wallet address',
            ethereum_address: 'update your ethereum wallet address',
            binance_address: 'update your bnb wallet address',
            dogecoin_address: 'update your dogecoin wallet address',
        }

        axios.post(dbUrl + 'users.json', data).then(r => {
            dispatch(setLoading(false));
            dispatch(setEmailModal(email))
        }).catch(e => {
            // console.log(e)
        })
    }
};

export const login = (email, password) => {
    return dispatch => {
        dispatch(setLoading(true))

        const data = {
            returnSecureToken: true,
            email,
            password
        };

        axios.post(loginUrl, data).then(r => {
            const token = r.data.idToken;
            localStorage.setItem('@localToken', token);
            localStorage.setItem('@localEmail', email);

            dispatch(setToken(token));
            dispatch(setLoading(false))
        }).catch(e => {
            if(e.response){
                dispatch(setAuthError(e.response.data.error.message));
            }else{
                dispatch(setAuthError(e.message));
            }
            dispatch(setLoading(false))
        })
    }
};

export const logout = () => {
    return dispatch => {
        localStorage.clear();
        dispatch(setToken(null));
    }
};

export const setEmailModal = (value) => {
    return{
        type: actionTypes.SETEMAILMODAL,
        value
    }
};

const setToken = (value) => {
    return{
        type: actionTypes.SETTOKEN,
        value
    }
};

const setLoading = (value) => {
    return{
        type: actionTypes.SETLOADING,
        value
    }
};

const setAuthError = (value) => {
    return{
        type: actionTypes.SETAUTHERROR,
        value
    }
}