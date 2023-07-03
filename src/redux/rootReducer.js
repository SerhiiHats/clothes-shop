import authReducer from "../companents/Auth/authReducer";
import {combineReducers} from "redux";

export default combineReducers({
  auth: authReducer,
});
