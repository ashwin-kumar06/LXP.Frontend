// src/reducers/ReviewReducer.js

import {
    FETCH_REVIEW_REQUEST,
    FETCH_REVIEW_SUCCESS,
    FETCH_REVIEW_FAILURE
  } from '../actions/ReviewAction';
  
  const initialState = {
    reviewData: [],
    loading: false,
    error: null
  };
  
  const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_REVIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          reviewData: action.reviewData
        };
      case FETCH_REVIEW_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error
        };
      default:
        return state;
    }
  };
  
  export default reviewReducer;