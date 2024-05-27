import axios from 'axios';
import  { useState } from 'react';
import { fetchQuestionsFailure, fetchQuestionsRequest, fetchQuestionsSuccess } from '../actions/GetAllQuestionAction';
import { useLocation } from 'react-router-dom';
import { DELETE_QUIZ_QUESTION_REQUEST, deleteQuizQuestionSuccess,deleteQuizQuestionFailure } from '../actions/DeleteQuizQuestionAction';
import { UPDATE_QUIZ_QUESTION_REQUEST,updateQuizQuestionSuccess,updateQuizQuestionFailure } from '../actions/UpdateQuizQuestionAction';


export const BulkUploadQuestion = async (files,quizId) => {
    if(files && files.length>0){
        const file = files[0];
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await axios.post(`http://localhost:5199/api/BulkQuestion/ImportQuizData?quizId=${quizId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log("BulkUploadQuestion",response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
      }else{
        console.log("no file")
      }
};

export const GetOpenEditQuestionModal = async(quizQuestionId) =>{
  try {
    const response = await axios.get(`http://localhost:5199/api/QuizQuestions/GetQuestionById?quizQuestionId=${quizQuestionId}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error.message;
  }
}

export const DeleteQuizQuestionsApi = ({ dispatch }) => (next) => async (action) => {
  if (action.type === DELETE_QUIZ_QUESTION_REQUEST) {
      try {
          console.log("deleting questionId", action.payload);
          const response = await axios.delete(`http://localhost:5199/api/QuizQuestions/DeleteQuestion?quizQuestionId=${action.payload}`);
          console.log("api questions:",response.data);
          dispatch(deleteQuizQuestionSuccess(response.data));
      } catch (error) {
          console.log("Error fetching question: ", error.message);
          dispatch(deleteQuizQuestionFailure(error.message));
      }
  }
  return next(action);
}

export const UpdateQuizQuestionsApi = ({ dispatch }) => (next) => async (action) => {  
  if (action.type === UPDATE_QUIZ_QUESTION_REQUEST) {
      try {
          console.log("updatingting questionId", action.payload.quizQuestionId);
          const response = await axios.put(`http://localhost:5199/api/QuizQuestions/UpdateQuestion?quizQuestionId=${action.payload.quizQuestionId}`,action.payload);
          console.log("update api questions:",response.data);
          dispatch(updateQuizQuestionSuccess(response.data));
      } catch (error) {
          console.log("Error fetching question: ", error.message);
          dispatch(updateQuizQuestionFailure(error.message));
      }
  }
  return next(action);
}


export const PostSingleQuestion = async(requestBody) =>{
  console.log("single question: ",requestBody)
  try {
    const response = await axios.post('http://localhost:5199/api/QuizQuestions/AddQuestion', requestBody);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error.message;
  }
}