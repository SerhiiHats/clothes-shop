import initialStore from "../../redux/initialStore";
import {SET_MAP_COUNT} from "./countAction";

const mapQuantityReducer = (mapQuantity = initialStore.mapQuantity, action) => {
  switch (action.type) {
    case SET_MAP_COUNT: {
      let newMapQuantity = new Map();
      mapQuantity.forEach((value, key, map) => {
        newMapQuantity.set(key, value)
      });

      if (newMapQuantity.has(action.payload.id)) {
        const tempCount = newMapQuantity.get(action.payload.id);
        newMapQuantity.set(action.payload.id, (tempCount + action.payload.quantity))

        if(newMapQuantity.get(action.payload.id) === 0){
          newMapQuantity.delete(action.payload.id);
        }

        return newMapQuantity;
      }
        newMapQuantity.set(action.payload.id, action.payload.quantity);

      return newMapQuantity;

    }

    default:
      return mapQuantity;
  }
};

export default mapQuantityReducer;