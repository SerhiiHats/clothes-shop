import React from 'react';
import initialStore from "../../redux/initialStore";
import {SET_ITEM_COUNT} from "./countAction";

const mapQuantityReducer = (mapQuantity = initialStore.mapQuantity, action) => {
  switch (action.type) {
    case SET_ITEM_COUNT: {

      const newMapQuantity = new Map();
      mapQuantity.forEach((key, value) => {
        newMapQuantity.set(key, value)
      });
      console.log(newMapQuantity)

      if (newMapQuantity.has(action.payload.id)) {
        console.log("action.payload.id : " + action.payload.id + " , значение = " + action.payload.quantity);
        const tempCount = newMapQuantity.get(action.payload.id);
        newMapQuantity.set(action.payload.id, (tempCount + action.payload.quantity))
      } else {
        console.log("отсутствует id : " + action.payload.id + " , добавляем значение по ключу :" + action.payload.quantity)
        newMapQuantity.set(action.payload.id, action.payload.quantity);
      }

      return newMapQuantity;

    }
    default:
      return mapQuantity;
  }
};

export default mapQuantityReducer;