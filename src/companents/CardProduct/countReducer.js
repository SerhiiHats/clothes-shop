import initialStore from "../../redux/initialStore";
import {DECREMENT, INCREMENT} from "./countAction";

const countReducer = (count = initialStore.count, action)=>{
  switch (action.type) {
    case INCREMENT:{
      return count + 1;
    }
    case DECREMENT:{
      if (count < 1){
        return 0;
      }
      return count - 1;
    }
    default: {
      return count;
    }
  }
}

export default countReducer;