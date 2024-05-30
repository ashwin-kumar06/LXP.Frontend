import CreateQuiz from "../components/QuizComponents/CreateQuiz";
import { Provider } from 'react-redux';
import store from "../Store/Store";
import '../Styles/CreateQuiz.css'
import  QuestionTemplate  from "../components/QuizComponents/QuestionTemplate";
function QuestionTemplateView() {
    return (
        <>
        <QuestionTemplate/>
        </>
    );
}

export default QuestionTemplateView;