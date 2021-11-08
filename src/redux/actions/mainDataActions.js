import { dataSet } from "../../data";
import { FETCH_DATA } from "../types";
export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA, payload: dataSet });
};
