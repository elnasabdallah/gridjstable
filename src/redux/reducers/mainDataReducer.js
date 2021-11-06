import { FETCH_DATA, UPDATES } from "./../types";
const initialState = {
  data: [],
  updates: [],
};

export const mainDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATES:
      return {
        ...state,
        updates: action.payload,
      };
    default:
      return state;
  }
};
