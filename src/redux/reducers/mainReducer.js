import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false
};

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.SETLOADING):
            return {...state, loading: action.value};
    }
    return state;
};

export default mainReducer