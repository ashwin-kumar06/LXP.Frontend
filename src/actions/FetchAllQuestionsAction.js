// actions/FetchQuizQuestionsAction.js

export const FETCH_ALL_QUIZ_QUESTION_REQUEST = 'FETCH_ALL_QUIZ_QUESTION_REQUEST';
export const FETCH_ALL_QUIZ_QUESTION_SUCCESS = 'FETCH_ALL_QUIZ_QUESTION_SUCCESS';
export const FETCH_ALL_QUIZ_QUESTION_FAILURE = 'FETCH_ALL_QUIZ_QUESTION_FAILURE';

export const fetchAllQuizQuestionRequest = (quizId) => ({
    type: FETCH_ALL_QUIZ_QUESTION_REQUEST,
    payload: quizId,
});

export const fetchAllQuizQuestionSuccess = (questions) => ({
    type: FETCH_ALL_QUIZ_QUESTION_SUCCESS,
    payload: questions,
});

export const fetchAllQuizQuestionFailure = (error) => ({
    type: FETCH_ALL_QUIZ_QUESTION_FAILURE,
    payload: error,
});