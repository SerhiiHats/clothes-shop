import initialStore from "../../redux/initialStore";
import {SET_STYLE_NAV} from "./setStyleNavAction";

const setStyleNavReducer = (setStyleNav = initialStore.setStyleNav, action) => {
  switch (action.type) {
    case SET_STYLE_NAV: {
      return action.payload;
    }
    default:
      return setStyleNav;
  }
};

export default setStyleNavReducer;