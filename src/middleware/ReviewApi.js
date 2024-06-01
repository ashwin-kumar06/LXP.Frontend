// src/middleware/ReviewMiddleware.js

import axios from 'axios';
import {
  FETCH_REVIEW_REQUEST,
  fetchReviewSuccess,
  fetchReviewFailure
} from '../actions/ReviewAction';

const reviewApi = ({ dispatch, getState }) => next => async action => {
  if (action.type === FETCH_REVIEW_REQUEST) {
    const { attemptId } = action;
    try {
      const response = await axios.get(`http://localhost:5199/api/QuizEngine/attempt/${attemptId}/review`);
      
      // Get questions to include options in review data
      const questions = getState().AttemptQuiz.questions;
      const reviewDataWithOptions = response.data.map(reviewQuestion => {
        const question = questions.find(q => q.quizQuestionId === reviewQuestion.quizQuestionId);
        return {
          ...reviewQuestion,
          options: question ? question.options : []
        };
      });

      dispatch(fetchReviewSuccess(reviewDataWithOptions));
    } catch (error) {
      dispatch(fetchReviewFailure(error.message));
    }
  }
  return next(action);
};

export default reviewApi;






















// // src/middleware/ReviewMiddleware.js

// import axios from 'axios';
// import {
//   FETCH_REVIEW_REQUEST,
//   fetchReviewSuccess,
//   fetchReviewFailure
// } from '../actions/ReviewAction';

// const reviewApi = ({ dispatch }) => next => async action => {
//   if (action.type === FETCH_REVIEW_REQUEST) {
//     const { attemptId } = action;
//     try {
//       const response = await axios.get(`http://localhost:5199/api/QuizEngine/attempt/${attemptId}/review`);
//       dispatch(fetchReviewSuccess(response.data));
//       console.log("review Questions",response.data)
//     } catch (error) {
//       dispatch(fetchReviewFailure(error.message));
//     }
//   }
//   return next(action);
// };

// export default reviewApi;