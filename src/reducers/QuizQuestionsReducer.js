
































// reducers/quizQuestionsReducer.js

// import {
//     FETCH_ALL_QUIZ_QUESTION_REQUEST,
//     FETCH_ALL_QUIZ_QUESTION_SUCCESS,
//     FETCH_ALL_QUIZ_QUESTION_FAILURE,
// } from '../actions/FetchAllQuestionsAction';

// const initialState = {
//     loading: false,
//     questions: [],
//     error: null,
// };

// const quizQuestionsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_ALL_QUIZ_QUESTION_REQUEST:
//             return { ...state, loading: true, error: null };
//         case FETCH_ALL_QUIZ_QUESTION_SUCCESS:
//             return { ...state, loading: false, questions: action.payload };
//         case FETCH_ALL_QUIZ_QUESTION_FAILURE:
//             return { ...state, loading: false, error: action.payload };
//         default:
//             return state;
//     }
// };

// export default quizQuestionsReducer;