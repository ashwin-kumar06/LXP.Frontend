import React from 'react'
import { FETCH_ALL_QUIZ_QUESTION_REQUEST,FETCH_ALL_QUIZ_QUESTION_SUCCESS,FETCH_ALL_QUIZ_QUESTION_FAILURE } from '../actions/FetchQuizQuestionsAction'; 
const initialState = { 
    quizQuestions: [],
    loading: false,
    error: null,
    isSubmitted:false,
  };
 
  const fetchQuizQuestionsReducer = (state = initialState, action) => {
    switch (action.type) {
       case FETCH_ALL_QUIZ_QUESTION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ALL_QUIZ_QUESTION_SUCCESS:       
        return {
          ...state,
          loading: false,
          quizQuestions: [...state.quizQuestions, action.payload],
          isSubmitted:true,
          error: null,
        };
       
      case FETCH_ALL_QUIZ_QUESTION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
     
      default:
        return state;
    }
  };
 
export default fetchQuizQuestionsReducer