// src/actions/ReviewActions.js

export const FETCH_REVIEW_REQUEST = 'FETCH_REVIEW_REQUEST';
export const FETCH_REVIEW_SUCCESS = 'FETCH_REVIEW_SUCCESS';
export const FETCH_REVIEW_FAILURE = 'FETCH_REVIEW_FAILURE';

export const fetchReviewRequest = (attemptId) => ({
  type: FETCH_REVIEW_REQUEST,
  attemptId
});

export const fetchReviewSuccess = (reviewData) => ({
  type: FETCH_REVIEW_SUCCESS,
  reviewData
});

export const fetchReviewFailure = (error) => ({
  type: FETCH_REVIEW_FAILURE,
  error
});