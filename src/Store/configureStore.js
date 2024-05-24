import { createStore, combineReducers,applyMiddleware } from 'redux';
import quizReducer from '../reducers/quizReducer';
import thunk from 'redux-thunk'; // Corrected import
import { quizIdReducer } from '../reducers/CreateQuizReducer';
import { QuizFeedbackApi } from '../middleware/QuizFeedbackApi';
import QuizFeedbackReducer from '../reducers/QuizFeedbackReducer';
import TopicFeedbackReducer from '../reducers/TopicFeedbackReducer';
import { TopicFeedbackApi } from '../middleware/TopicFeedbackApi';
import GetAllFeedbackReducer from '../reducers/GetAllFeedbackReducer';
import { GetAllFeedbackApi } from '../middleware/GetAllFeedbackApi';
import GetTopicFeedbackReducer from '../reducers/GetTopicFeedbackReducer';
import { GetTopicFeedbackApi } from '../middleware/GetTopicFeedbackApi';
import { GetAllQuestion } from '../middleware/QuestionApi';
import questionReducer from '../reducers/GetAllQuestionReducers';

const rootReducer = combineReducers({
  quizfeedback:QuizFeedbackReducer,
  TopicFeedback:TopicFeedbackReducer,
  fetchfeedback:GetAllFeedbackReducer,
  fetchtopicfeedback:GetTopicFeedbackReducer,
  quiz: quizReducer,
  questions: questionReducer,
});
 
const store = createStore(rootReducer, applyMiddleware(thunk,QuizFeedbackApi,TopicFeedbackApi,GetAllFeedbackApi,GetTopicFeedbackApi));
 
export default store;