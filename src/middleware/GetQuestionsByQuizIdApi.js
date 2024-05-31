// middleware/GetQuestionsByQuizIdApi.js

import {
    FETCH_ALL_QUIZ_QUESTION_REQUEST,
    fetchAllQuizQuestionSuccess,
    fetchAllQuizQuestionFailure,
} from '../actions/FetchAllQuestionsAction';
import axios from 'axios';

export const GetQuestionsByQuizIdApi = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_ALL_QUIZ_QUESTION_REQUEST) {
        try {
            console.log("Fetching questions for quizId:", action.payload);
            // const response = await axios.get(`http://localhost:5199/api/QuizEngine/questions/${action.payload}`);
            const response = await axios.get(`http://localhost:5199/api/QuizEngine/questions/2bc763c7-a3fe-43cd-aa08-5236d1cbc672`);
            console.log("API Response:", response.data.data);
            dispatch(fetchAllQuizQuestionSuccess(response.data.data));
        } catch (error) {
            console.error("Error fetching question:", error.message);
            dispatch(fetchAllQuizQuestionFailure(error.message));
        }
    }
    return next(action);
};





















// import {
//     GET_ALL_QUESTION_REQUEST,
//     getAllQuestionSuccess,
//     getAllQuestionFailure,
// } from '../actions/DisplayAllQuestionsAction';
// import axios from 'axios';

// const GetQuestionsByQuizIdApi = ({ dispatch }) => (next) => async (action) => {
//     if (action.type === GET_ALL_QUESTION_REQUEST) {
//         try {
//             // Log the action payload to debug
//             console.log("Fetching questions for quizId:", action.payload);
            
//             const response = await axios.get(`http://localhost:5199/api/QuizEngine/questions/${action.payload}`)
            
//             // Log the response to debug
//             console.log("API Response:", response.data);
            
//             dispatch(getAllQuestionSuccess(response.data));
//         } catch (error) {
//             console.error("Error fetching question:", error.message);
//             dispatch(getAllQuestionFailure(error.message));
//         }
//     }
//     return next(action);
// };

// export default GetQuestionsByQuizIdApi;




















// import {
//     GET_ALL_QUESTION_REQUEST,
//     getAllQuestionSuccess,
//     getAllQuestionFailure,
// } from '../actions/DisplayAllQuestionsAction';
// import axios from 'axios';

// const GetQuestionsByQuizIdApi = ({ dispatch }) => (next) => async (action) => {
//     if (action.type === GET_ALL_QUESTION_REQUEST) {
//         try {
//             const response = await axios.get(`http://localhost:5199/api/QuizEngine/questions?quizId=${action.payload}`);
//             dispatch(getAllQuestionSuccess(response.data));
//         } catch (error) {
//             console.error("Error fetching question: ", error.message);
//             dispatch(getAllQuestionFailure(error.message));
//         }
//     }
//     return next(action);
// };

// export default GetQuestionsByQuizIdApi;





































// import { FETCH_ALL_QUIZ_QUESTION_REQUEST, fetchAllQuizQuestionSuccess, fetchAllQuizQuestionFailure } from '../actions/FetchQuizQuestionsAction';
// import axios from 'axios';

// export const GetQuestionsByQuizIdApi = ({ dispatch }) => (next) => async (action) => {
//     if (action.type === FETCH_ALL_QUIZ_QUESTION_REQUEST) {
//         try {
//             // console.log("sending quizId", action.payload);
//             const response = await axios.get(`http://localhost:5199/api/QuizEngine/questions?quizId=${action.payload}`);
//             // console.log("api questions:",response.data);
//             dispatch(fetchAllQuizQuestionSuccess(response.data));
//         } catch (error) {
//             console.log("Error fetching question: ", error.message);
//             dispatch(fetchAllQuizQuestionFailure(error.message));
//         }
//     }
//     return next(action);
// }