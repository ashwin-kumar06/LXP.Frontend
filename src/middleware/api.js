import axios from 'axios';
import { useState } from 'react';
import { setQuizDetailsRequest, setQuizDetailsSuccess,setQuizDetailsFailure, SET_QUIZ_DETAILS_REQUEST } from '../actions/CreateQuizAction';
import { fetchQuizIdSuccess, fetchQuizIdRequest, fetchQuizIdFailure } from '../actions/CreateQuizAction';
import { FETCH_QUIZ_ID_REQUEST, FETCH_QUIZ_ID_SUCCESS,FETCH_QUIZ_ID_FAILURE } from '../actions/CreateQuizAction';

const API_URL = 'http://localhost:5199/api/Quiz/topic/';

export const fetchQuizById = ({dispatch}) => (next) => async (action) => {
  if (action.type === FETCH_QUIZ_ID_REQUEST){
    try {
      console.log("fetch quizId",action.payload);
      const response = await axios.get(`http://localhost:5199/api/Quiz/topic/${action.payload}`);
      console.log("api quiz id:",response.data)
      dispatch(fetchQuizIdSuccess(response.data));
    } catch (error) {
      console.log("Fetching quizid: ", error.message);
      dispatch(fetchQuizIdFailure(error.message));  
    }
  }
  return next(action);
}

export const CreateQuiz = ({ dispatch }) => (next) => async (action) => {
  if (action.type == SET_QUIZ_DETAILS_REQUEST) {
    try {
      console.log("post quiz",action.payload);
      const response = await axios.post(API_URL,action.payload);
      console.log('feed Post API Response:', response.data); // Log the response data
      dispatch(setQuizDetailsSuccess(response.data.data)); // Dispatch success action with the response data                                             
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(setQuizDetailsFailure(error.message));
    }
  }
  return next(action);
  
};


// const createquiz = async (quizDetails) => {
//   try {
//     console.log("details", quizDetails);
//     const response = await axios.post('http://localhost:5199/api/Quiz', quizDetails);
//     return response.data;
//   } catch (error) {
//     console.error("Error:", error.message);
//     throw error.message;
//   }
// };

export const GetQuizDetails = async(quizId) =>{
  try {
    const response = await axios.get(`http://localhost:5199/api/Quiz/${quizId}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error.message;
  }
}

export const PutQuizDetails = async(updatedQuizData) =>{
  try{
    const response = await axios.put(`http://localhost:5199/api/Quiz/${updatedQuizData.quizId}`, updatedQuizData)
    console.log("Quiz edited successful",response.data);
  }catch (error) {
    console.error("Error:", error.message);
    throw error.message;
  }
}


export const DeleteQuizDetails = async(quizId) =>{
  console.log("delete quiz: ",quizId);
  try{
    const response = await axios.delete(`http://localhost:5199/api/Quiz/${quizId}`)
    console.log("Quiz deleted successful",response.data);
  }catch (error) {
    console.error("Error:", error.message);
    throw error.message;
  }
}



// export { createquiz };