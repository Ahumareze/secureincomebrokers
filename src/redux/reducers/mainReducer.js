import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    depositLoading: false,
    depositModal: false,
    withdrawLoading: false,
    withdrawModal: false,
    emailModal: null,
    showDrawer: false,
    userData: null,
    walletLoading: false,
    walletModal: false
};

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.SETLOADING):
            return {...state, loading: action.value};
        case(actionTypes.SETEMAILMODAL):
            return {...state, emailModal: action.value};
        case(actionTypes.SETSHOWDRAWER):
            return {...state, showDrawer: action.value};
        case(actionTypes.SETUSERDATA):
            return {...state, userData: action.value};
        case(actionTypes.SETDEPOSITLOADING):
            return {...state, depositLoading: action.value};
        case(actionTypes.SETDEPOSITMODAL):
            return {...state, depositModal: action.value};
        case(actionTypes.SETWITHDRAWLOADING):
            return {...state, withdrawLoading: action.value};
        case(actionTypes.SETWITHDRAWMODAL):
            return {...state, withdrawModal: action.value};
        case(actionTypes.SETWALLETLOADING):
            return {...state, walletLoading: action.value};
        case(actionTypes.SETWALLETMODAL):
            return {...state, walletModal: action.value}
    }
    return state;
};

export default mainReducer