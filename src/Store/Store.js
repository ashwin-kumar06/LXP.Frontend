import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Corrected import
import quizIdReducer from "../reducers/FetchQuizIdReducer";
import { QuizFeedbackApi } from "../middleware/QuizFeedbackApi";
import QuizFeedbackReducer from "../reducers/QuizFeedbackReducer";
import TopicFeedbackReducer from "../reducers/TopicFeedbackReducer";
import { TopicFeedbackApi } from "../middleware/TopicFeedbackApi";
import GetAllFeedbackReducer from "../reducers/GetAllFeedbackReducer";
import { GetAllFeedbackApi } from "../middleware/GetAllFeedbackApi";
import GetTopicFeedbackReducer from "../reducers/GetTopicFeedbackReducer";
import { GetTopicFeedbackApi } from "../middleware/GetTopicFeedbackApi";
import { DeleteQuizQuestionsApi, GetAllQuestion, UpdateQuizQuestionsApi, } from "../middleware/QuestionApi";
import { CreateQuizApi } from "../middleware/CreateQuizApi";
import { FetchQuizById } from "../middleware/FetchQuizIdApi";
import fetchQuizQuestionsReducer from "../reducers/FetchQuizQuestionsReducer.js";
import { FetchQuizQuestionsApi } from "../middleware/FetchQuizQuestionsApi";
import deleteQuizQuestionsReducer from "../reducers/DeleteQuizQuestionReducer";
import updateQuizQuestionReducer from "../reducers/UpdateQuizQuestionReducer";
import createQuizReducer from "../reducers/CreateQuizReducer";
import DeleteQuizFeedbackApi from "../middleware/DeleteQuizFeedbackApi";
import UpdateQuizFeedbackApi from "../middleware/UpdateQuizFeedbackApi";
import GetByIDFeedbackApi from "../middleware/GetByIDFeedbackApi";
import DeleteTopicFeedbackApi from "../middleware/DeleteTopicFeedbackApi";
import UpdateTopicFeedbackApi from "../middleware/UpdateTopicFeedbackApi";
import GetByIDTopicFeedbackApi from "../middleware/GetByIDTopicFeedbackApi";
import UpdateQuizFeedbackReducer from "../reducers/UpdateQuizFeedbackReducer";
import GetByIDQuizFeedbackReducer from "../reducers/GetByIDQuizFeedbackReducer";
import DeleteQuizFeedbackReducer from "../reducers/DeleteQuizFeedbackReducer";
import DeleteTopicFeedbackReducer from "../reducers/DeleteTopicFeedbackReducer";
import UpdateTopicFeedbackReducer from "../reducers/UpdateTopicFeedbackReducer";
import GetByIDTopicFeedbackReducer from "../reducers/GetByIDTopicFeedbackReducer";
import QuizInstructionReducer from "../reducers/QuizInstructionReducer";
import { QuizInstructionApi } from "../middleware/QuizInstructionApi.js";


export const rootReducer = combineReducers({
  quizId: quizIdReducer,
  quizQuestions: fetchQuizQuestionsReducer,
  deleteQuestion: deleteQuizQuestionsReducer,
  editQuizQuestion: updateQuizQuestionReducer,
  quiz: createQuizReducer,
  quizfeedback: QuizFeedbackReducer,
  TopicFeedback: TopicFeedbackReducer,
  fetchfeedback: GetAllFeedbackReducer,
  fetchtopicfeedback: GetTopicFeedbackReducer,
  updatequizfeedback: UpdateQuizFeedbackReducer,
  fetchquizfeedbackid: GetByIDQuizFeedbackReducer,
  deletequizfeedback: DeleteQuizFeedbackReducer,
  deletetopicfeedback: DeleteTopicFeedbackReducer,
  updatetopicfeedback: UpdateTopicFeedbackReducer,
  fetchtopicfeedbackid: GetByIDTopicFeedbackReducer,
  fetchquizinstructions: QuizInstructionReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    FetchQuizById,
    FetchQuizQuestionsApi,
    DeleteQuizQuestionsApi,
    UpdateQuizQuestionsApi,
    CreateQuizApi,
    QuizFeedbackApi,
    TopicFeedbackApi,
    GetAllFeedbackApi,
    GetTopicFeedbackApi,
    UpdateQuizFeedbackApi,
    GetByIDFeedbackApi,
    DeleteTopicFeedbackApi,
    DeleteQuizFeedbackApi,
    UpdateTopicFeedbackApi,
    GetByIDTopicFeedbackApi,
    QuizInstructionApi
  )
);

export default store;
