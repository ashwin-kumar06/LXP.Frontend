import { FETCH_QUIZ_ID_REQUEST, FETCH_QUIZ_ID_SUCCESS, FETCH_QUIZ_ID_FAILURE } from "../actions/FetchQuizIdAction";

const intialQuizIdState = {
    quizId: null,
    loading: false,
    error: null,
    isSubmitted:false
}

const quizIdReducer = (state = intialQuizIdState, action) => {
    switch (action.type) {
        case FETCH_QUIZ_ID_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_QUIZ_ID_SUCCESS:
            console.log("reducer",action.payload);
            return {
                ...state,
                loading: false,
                quizId: action.payload,
                isSubmitted: true,
                error: null,
            };
        case FETCH_QUIZ_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default quizIdReducer