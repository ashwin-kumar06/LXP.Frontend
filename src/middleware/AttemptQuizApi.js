import axios from 'axios';
import {FETCH_QUESTIONS_REQUEST, fetchQuestionsSuccess, fetchQuestionsFailure } from '../actions/AttemptQuizAction';

// const API_URL = 'http://localhost:5199/api/QuizEngine/questions/';
// const API_URL = 'http://localhost:5199/api/QuizEngine/quiz/2bc763c7-a3fe-43cd-aa08-5236d1cbc672/questions';

export const fetchQuestionsMiddleware = ({dispatch}) => (next) => async (action) => {
  if (action.type === FETCH_QUESTIONS_REQUEST) {
    try {
      // const response = await axios.get(`http://localhost:5199/api/QuizEngine/questions/${action.payload}`);
      const response = await axios.get(`http://localhost:5199/api/QuizEngine/quiz/${action.payload}/questions`);
      dispatch(fetchQuestionsSuccess(response.data));
      console.log(response.data)
    } catch (error) {
      dispatch(fetchQuestionsFailure(error.message));
    }
  }
  return next(action);
};




















// import { FETCH_QUESTIONS_REQUEST, fetchQuestionsSuccess, fetchQuestionsFailure } from '../actions/AttemptQuizAction';

// export const fetchQuestionsMiddleware = (api) => (store) => (next) => async (action) => {
//   if (action.type === FETCH_QUESTIONS_REQUEST) {
//     try {
//       const response = await api.fetchQuestions(action.payload); // Implement your API call here
//       store.dispatch(fetchQuestionsSuccess(response.data));
//     } catch (error) {
//       store.dispatch(fetchQuestionsFailure(error.message));
//     }
//   }
//   return next(action);
// };
