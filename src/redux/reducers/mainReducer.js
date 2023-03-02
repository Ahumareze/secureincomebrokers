import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    emailModal: null
};

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.SETLOADING):
            return {...state, loading: action.value};
        case(actionTypes.SETEMAILMODAL):
            return {...state, emailModal: action.value};
    }
    return state;
};

export default mainReducer