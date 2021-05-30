import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_SUCCESS:
      return { products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
// I can add request thing in it if later i will had time i will add it loading component and fail message
export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_SUCCESS:
      return { product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
