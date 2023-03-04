import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    depositLoading: false,
    depositModal: false,
    emailModal: null,
    showDrawer: false,
    userData: null
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
    }
    return state;
};

export default mainReducer