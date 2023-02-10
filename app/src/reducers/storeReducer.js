import { getAllStore } from '../services/Api'
const initState = {
  productsStore: [],
};
export const getProductStore = (params) => async (dispatch) => {
  const result = await getAllStore(params);
  dispatch({ type: "GET_STORE", productStore: result?.data });
};
export default function storeReducer(state = initState, action) {
  switch (action.type) {
    case "GET_STORE":
      return {
        ...state,
        productsStore: action.productStore
      };

    default:
      return state;
  }
}
