import initialStore from "../../redux/initialStore";
import {SET_SHOW_MODAL_CART} from "./setShowCartAction";

const cartReducer = (showModalCart = initialStore.showModalCart, action) => {
  switch (action.type) {
    case SET_SHOW_MODAL_CART: {
      console.log("SET_SHOW_MODAL_CART: ", !showModalCart)
      return !showModalCart;
    }

    default: {
      return showModalCart;
    }
  }
}

export default cartReducer;