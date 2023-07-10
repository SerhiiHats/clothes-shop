import React from 'react';
import initialStore from "../../redux/initialStore";
import {SET_ITEM_COUNT} from "./countAction";

const ItemCountReducer = (quantityItems = initialStore.quantityItems, action) => {
  switch (action.type) {
    case SET_ITEM_COUNT: {
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

export default ItemCountReducer;