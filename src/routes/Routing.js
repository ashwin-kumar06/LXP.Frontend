import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import CreateQuizView from "../View/Quiz And Feedback Module/CreateQuizView";
import UploadBulkQuiz from "../components/Quiz And Feedback Module/QuizComponents/UploadBulkQuiz";
import ReviewQuestions from "../components/Quiz And Feedback Module/QuizComponents/ReviewQuestions";
import GetAllFeedbacks from "../components/Quiz And Feedback Module/QuizComponents/GetAllFeedbacks";
import GetTopicFeedback from "../components/Quiz And Feedback Module/QuizComponents/GetTopicFeedback";
import CoursePageView from "../View/Quiz And Feedback Module/CoursePageView";
import { QuestionTemplate } from "../components/Quiz And Feedback Module/QuizComponents/QuestionTemplate";
import QuestionTemplateView from "../View/Quiz And Feedback Module/QuestionTemplateView";
import LearnerCoursepageView from "../View/Quiz And Feedback Module/LearnerCoursepageview";
import QuizInstruction from "../components/Quiz And Feedback Module/QuizComponents/QuizInstruction";
import AttemptQuiz from "../components/Quiz And Feedback Module/QuizComponents/AttemptQuiz";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoursePageView />} />
        <Route path="/createquiz" element={<CreateQuizView />} />
        <Route path="/questiontemplate" element={<QuestionTemplateView />} />
        <Route path="/getallfeedback" element={<GetAllFeedbacks />} />
        <Route path="/reviewquestions" element={<ReviewQuestions />} />
        <Route path="/topicfeedback" element={<GetTopicFeedback />} />
        <Route path="/quizfeedback" element={<GetAllFeedbacks />} />
        <Route path="/upload" element={<UploadBulkQuiz />} />
        <Route path="/quizengine" element={<LearnerCoursepageView />} />
        <Route path="/instruction" element={<QuizInstruction/>} />
        <Route path="/attemptquiz" element={<AttemptQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;
