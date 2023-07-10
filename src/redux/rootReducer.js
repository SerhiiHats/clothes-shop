import authReducer from "../companents/Auth/authReducer";
import {combineReducers} from "redux";
import countReducer from "../companents/CardProduct/countReducer";
import itemCountReducer from "../companents/CardProduct/itemCountReducer";
import mapQuantityReducer from "../companents/CardProduct/mapQuantityReducer";

export default combineReducers({
  auth: authReducer,
  count: countReducer,
  quantityItems: itemCountReducer,
  mapQuantity: mapQuantityReducer,
});
