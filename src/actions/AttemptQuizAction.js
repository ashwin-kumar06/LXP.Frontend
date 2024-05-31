export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';

export const fetchQuestionsRequest = (quizId) => ({
  type: FETCH_QUESTIONS_REQUEST,
  payload: quizId,
});

export const fetchQuestionsSuccess = (questions) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: questions,
});

export const fetchQuestionsFailure = (error) => ({
  type: FETCH_QUESTIONS_FAILURE,
  payload: error,
});


























// export const FETCH_ALL_QUESTIONS_REQUEST='FETCH_ALL_QUESTIONS_REQUEST';
// export const FETCH_ALL_QUESTIONS_SUCCESS='FETCH_ALL_QUESTIONS_SUCCESS';
// export const FETCH_ALL_QUESTIONS_FAILURE='FETCH_ALL_QUESTIONS_FAILURE';
 
// export const fetchallquestionsRequest=(formData)=>({
//     type:FETCH_ALL_QUESTIONS_REQUEST,
//     payload:formData
// });
 
// export const fetchallquestionsSuccess=(QUESTIONS)=>({
//     type:FETCH_ALL_QUESTIONS_SUCCESS,
//     payload:QUESTIONS
// });
 
// export const fetchallquestionsFailure=(error)=>({
//     type:FETCH_ALL_QUESTIONS_FAILURE,
//     payload:error
// });