import { FETCH_QUIZINSTRUCTION_REQUEST, FETCH_QUIZINSTRUCTION_SUCCESS, FETCH_QUIZINSTRUCTION_FAILURE} from "../actions/QuizInstructionAction";

const initialState = {
    quizinstructiondetails:[],
    error: null,
    loading: false,

};


const QuizInstructionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUIZINSTRUCTION_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_QUIZINSTRUCTION_SUCCESS:
            return {
                ...state,
                loading: false,
                quizinstructiondetails: action.payload,
                error: null,
            };

        case FETCH_QUIZINSTRUCTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default QuizInstructionReducer