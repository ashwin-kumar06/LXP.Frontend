// import CreateQuiz from "../components/QuizComponents/CreateQuiz";
// import { Provider } from 'react-redux';
// import store from "../Store/Store";
// import '../Styles/CreateQuiz.css'
// import  QuestionTemplate  from "../components/QuizComponents/QuestionTemplate";
import CreateQuiz from "../../components/Quiz And Feedback Module/QuizComponents/CreateQuiz";
import { Provider } from "react-redux";
import store from "../../Store/Store";
import "../../Styles/Quiz And Feedback Module/CreateQuiz.css";
import QuestionTemplate from "../../components/Quiz And Feedback Module/QuizComponents/QuestionTemplate";

function QuestionTemplateView() {
    return (
        <>
        <QuestionTemplate/>
        </>
    );
}

export default QuestionTemplateView;