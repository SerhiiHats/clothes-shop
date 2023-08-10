import authReducer from "../companents/Auth/authReducer";
import {combineReducers} from "redux";
import countReducer from "../companents/CardProduct/countReducer";
import mapQuantityReducer from "../companents/CardProduct/mapQuantityReducer";
import setStyleNavReducer from "../companents/FooterMobile/setStyleNavReducer";

export default combineReducers({
  auth: authReducer,
  count: countReducer,
  mapQuantity: mapQuantityReducer,
  setStyleNav: setStyleNavReducer,
});
