export const SET_COUNT = "SET_COUNT";

export const SET_ITEM_COUNT = "SET_ITEM_COUNT";

export const setCountAC = (value) => {
  return {
    type: SET_COUNT,
    payload: value,
  };
};

export const setItemCountAC = (id, quantity) => {
  return {
    type: SET_ITEM_COUNT,
    payload: {id, quantity},
  };
};