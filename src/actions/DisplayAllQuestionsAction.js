export const GET_ALL_QUESTION_REQUEST = 'GET_ALL_QUESTION_REQUEST';
export const GET_ALL_QUESTION_SUCCESS = 'GET_ALL_QUESTION_SUCCESS';
export const GET_ALL_QUESTION_FAILURE = 'GET_ALL_QUESTION_FAILURE';

export const getAllQuestionRequest = (quizId) => ({
    type: GET_ALL_QUESTION_REQUEST,
    payload: quizId,
});

export const getAllQuestionSuccess = (questions) => ({
    type: GET_ALL_QUESTION_SUCCESS,
    payload: questions,
});

export const getAllQuestionFailure = (error) => ({
    type: GET_ALL_QUESTION_FAILURE,
    payload: error,
});
























// export const GET_ALL_QUESTION_REQUEST = 'GET_ALL_QUESTION_REQUEST';
// export const GET_ALL_QUESTION_SUCCESS = 'GET_ALL_QUESTION_SUCCESS';
// export const GET_ALL_QUESTION_FAILURE = 'GET_ALL_QUESTION_FAILURE';

// export const getAllQuestionRequest = (quizId) => ({
//     type: GET_ALL_QUESTION_REQUEST,
//     payload: quizId,
// });

// export const getAllQuestionSuccess = (questions) => ({
//     type: GET_ALL_QUESTION_SUCCESS,
//     payload: questions,
// });

// export const getAllQuestionFailure = (error) => ({
//     type: GET_ALL_QUESTION_FAILURE,
//     payload: error,
// });