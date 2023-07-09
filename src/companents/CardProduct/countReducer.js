import initialStore from "../../redux/initialStore";
import {SET_COUNT} from "./countAction";

const countReducer = (count = initialStore.count, action) => {
  switch (action.type) {
    case SET_COUNT: {
      return count + action.payload;
    }
    default: {
      return count;
    }
  }
}

export default countReducer;