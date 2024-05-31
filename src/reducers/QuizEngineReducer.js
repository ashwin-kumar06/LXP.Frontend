import {
    GET_ALL_QUESTION_REQUEST,
    GET_ALL_QUESTION_SUCCESS,
    GET_ALL_QUESTION_FAILURE,
} from '../actions/DisplayAllQuestionsAction';

const initialState = {
    loading: false,
    questions: [],
    error: '',
};

const quizEngineReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_QUESTION_REQUEST:
            return { ...state, loading: true };
        case GET_ALL_QUESTION_SUCCESS:
            return { ...state, loading: false, questions: action.payload };
        case GET_ALL_QUESTION_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default quizEngineReducer;