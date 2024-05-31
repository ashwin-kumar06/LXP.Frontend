import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import CreateQuizView from '../View/CreateQuizView';
import UploadBulkQuiz from '../components/QuizComponents/UploadBulkQuiz';
import ReviewQuestions from '../components/QuizComponents/ReviewQuestions';
import GetAllFeedbacks from '../components/QuizComponents/GetAllFeedbacks';
import GetTopicFeedback from '../components/QuizComponents/GetTopicFeedback';
import CoursePageView from '../View/CoursePageView';
import { QuestionTemplate } from '../components/QuizComponents/QuestionTemplate';
import QuestionTemplateView from '../View/QuestionTemplateView';
import QuizInstruction from '../components/QuizComponents/QuizInstruction';
import LearnerCoursepageView from '../View/LearnerCoursepageView';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CoursePageView />} />
                <Route path="/quizengine" element={<LearnerCoursepageView/>} />
                <Route path="/createquiz" element={<CreateQuizView />} />
                <Route path='/questiontemplate' element={<QuestionTemplateView />} />
                <Route path='/getallfeedback' element={<GetAllFeedbacks />} />
                <Route path='/reviewquestions' element={<ReviewQuestions />} />
                <Route path='/topicfeedback' element={<GetTopicFeedback />} />
                <Route path='/quizfeedback' element={<GetAllFeedbacks />} />
                <Route path='/upload' element={<UploadBulkQuiz />} />
                <Route path='/instruction' element={<QuizInstruction/>} />
            </Routes>
        </BrowserRouter>
    )
};
export default Routing;