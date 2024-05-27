export const UPDATE_QUIZ_QUESTION_REQUEST='FETCH_ALL_ALL_QUIZFEEDBACK_REQUEST';
export const UPDATE_QUIZ_QUESTION_SUCCESS='FETCH_ALL_QUIZFEEDBACK_SUCCESS';
export const UPDATE_QUIZ_QUESTION_FAILURE='FETCH_ALL_QUIZFEEDBACK_FAILURE';
 
export const updateQuizQuestionRequest=(formData)=>({
    type:UPDATE_QUIZ_QUESTION_REQUEST,
    payload:formData
});
 
export const updateQuizQuestionSuccess=(editQuizQuestion)=>({
    type:UPDATE_QUIZ_QUESTION_SUCCESS,
    payload:editQuizQuestion
});
 
export const updateQuizQuestionFailure=(error)=>({
    type:UPDATE_QUIZ_QUESTION_FAILURE,
    payload:error
});