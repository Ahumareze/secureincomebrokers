import { combineReducers } from "redux";

//reudcers
import mainReducer from "./mainReducer";
import authReducer from './authReducer';

const rootReducer = combineReducers({
    mainReducer,
    authReducer
});

export default rootReducer