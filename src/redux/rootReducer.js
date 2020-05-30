import {combineReducers} from "redux";
import userReducer, {flightReducer} from "./reducers";

export const rootReducer = combineReducers({
    user : userReducer,
    flight : flightReducer
});