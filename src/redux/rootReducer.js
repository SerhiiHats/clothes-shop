import authReducer from "../companents/Auth/authReducer";
import {combineReducers} from "redux";
import countReducer from "../companents/CardProduct/countReducer";

export default combineReducers({
  auth: authReducer,
  count: countReducer,
});
