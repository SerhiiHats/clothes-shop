import initialStore from "../../redux/initialStore";
import {SET_SHOW_MODAL_ABOUT} from "./aboutAction";

const aboutReducer = (showModalAbout = initialStore.showModalAbout, action) => {
  switch (action.type) {
    case SET_SHOW_MODAL_ABOUT: {
      return !showModalAbout;
    }
    default: {
      return showModalAbout;
    }
  }
}

export default aboutReducer;