import authReducer from "../companents/Auth/authReducer";
import {combineReducers} from "redux";
import countReducer from "../companents/CardProduct/countReducer";
import mapQuantityReducer from "../companents/CardProduct/mapQuantityReducer";

export default combineReducers({
  auth: authReducer,
  count: countReducer,
  mapQuantity: mapQuantityReducer,
});
