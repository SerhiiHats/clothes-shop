export const SET_COUNT = "SET_COUNT";

export const setCountAC = (value) =>{
  return {
    type: SET_COUNT,
    payload: value,
  };
};