import initialStore from "../../redux/initialStore";
import {SET_MAP_COUNT} from "./countAction";

const itemCountReducer = (quantityItems = initialStore.quantityItems, action) => {
  switch (action.type) {
    case SET_MAP_COUNT: {
      // if (action.payload.id){
        const tempQuantityItems = {...quantityItems};
        tempQuantityItems[action.payload.id] = quantityItems[action.payload.id] + action.payload.quantity;
        return {...tempQuantityItems}

    }
    default: {
      return quantityItems;
    }
  }

};

export default itemCountReducer;