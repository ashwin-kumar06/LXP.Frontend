import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Corrected import
import quizIdReducer from '../reducers/FetchQuizIdReducer';
import { QuizFeedbackApi } from '../middleware/QuizFeedbackApi';
import QuizFeedbackReducer from '../reducers/QuizFeedbackReducer';
import TopicFeedbackReducer from '../reducers/TopicFeedbackReducer';
import { TopicFeedbackApi } from '../middleware/TopicFeedbackApi';
import GetAllFeedbackReducer from '../reducers/GetAllFeedbackReducer';
import { GetAllFeedbackApi } from '../middleware/GetAllFeedbackApi';
import GetTopicFeedbackReducer from '../reducers/GetTopicFeedbackReducer';
import { GetTopicFeedbackApi } from '../middleware/GetTopicFeedbackApi';
import { DeleteQuizQuestionsApi, GetAllQuestion, UpdateQuizQuestionsApi } from '../middleware/QuestionApi';
import questionReducer from '../reducers/FetchQuizQuestionsReducer.js';
import { CreateQuizApi } from '../middleware/CreateQuizApi';
import { FetchQuizById } from '../middleware/FetchQuizIdApi';
import fetchQuizQuestionsReducer from '../reducers/FetchQuizQuestionsReducer.js';
import { FetchQuizQuestionsApi } from '../middleware/FetchQuizQuestionsApi';
import deleteQuizQuestionsReducer from '../reducers/DeleteQuizQuestionReducer';
import updateQuizQuestionReducer from '../reducers/UpdateQuizQuestionReducer';
import createQuizReducer from '../reducers/CreateQuizReducer';
import AttemptQuizReducer from '../reducers/AttemptQuizReducer';
import {fetchQuestionsMiddleware} from '../middleware/AttemptQuizApi';


export const rootReducer = combineReducers({
  quizId: quizIdReducer,
  quizQuestions: fetchQuizQuestionsReducer,
  deleteQuestion: deleteQuizQuestionsReducer,
  editQuizQuestion: updateQuizQuestionReducer,
  quiz: createQuizReducer,
  AttemptQuiz: AttemptQuizReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk,FetchQuizById,FetchQuizQuestionsApi, DeleteQuizQuestionsApi, UpdateQuizQuestionsApi, CreateQuizApi,fetchQuestionsMiddleware));
 
export default store;