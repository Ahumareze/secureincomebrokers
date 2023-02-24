import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

//root reducer import
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;