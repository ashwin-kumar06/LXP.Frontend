import axios from 'axios';
import { FETCH_ALL_QUIZFEEDBACK_REQUEST,fetchallquizfeedbackSuccess,fetchallquizfeedbackFailure } from '../actions/GetAllQuizFeedbackAction';

const API_URL = 'http://localhost:5199/api/QuizFeedback/GetAllFeedbackQuestions';
 
export const GetAllFeedbackApi = ({ dispatch }) => (next) => async (action) => {
  if (action.type === FETCH_ALL_QUIZFEEDBACK_REQUEST) {
    try {
      console.log("post",action.payload);
      const response = await axios.get(API_URL,action.payload);
      console.log('API Response:', response.data);
      dispatch(fetchallquizfeedbackSuccess(response.data));                                        
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchallquizfeedbackFailure(error.message));
    }
  }
  return next(action);
};
 