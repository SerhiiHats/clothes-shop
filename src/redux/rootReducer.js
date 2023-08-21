import authReducer from "../companents/Auth/authReducer";
import {combineReducers} from "redux";
import countReducer from "../companents/CardProduct/countReducer";
import mapQuantityReducer from "../companents/CardProduct/mapQuantityReducer";
import setStyleNavReducer from "../companents/FooterMobile/setStyleNavReducer";
import aboutReducer from "../companents/About/aboutReducer";
import cartReducer from "../companents/CartShopping/cartReducer";

export default combineReducers({
  auth: authReducer,
  count: countReducer,
  mapQuantity: mapQuantityReducer,
  setStyleNav: setStyleNavReducer,
  showModalAbout: aboutReducer,
  showModalCart: cartReducer,
});
