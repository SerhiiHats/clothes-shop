export const SET_COUNT = "SET_COUNT";

export const SET_MAP_COUNT = "SET_MAP_COUNT";

export const setCountAC = (value) => {
  return {
    type: SET_COUNT,
    payload: value,
  };
};

export const setMapCountAC = (id, quantity) => {
  return {
    type: SET_MAP_COUNT,
    payload: {id, quantity},
  };
};