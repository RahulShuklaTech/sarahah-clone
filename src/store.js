import {applyMiddleware, combineReducers, createStore} from "redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
});

const middleware = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));