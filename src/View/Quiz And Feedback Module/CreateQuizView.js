// import CreateQuiz from "../components/QuizComponents/CreateQuiz";
// import { Provider } from 'react-redux';
// import Home from "../components/QuizComponents/CreateQuiz";
// import '../Styles/CreateQuiz.css'
// import { QuestionTemplate } from "../components/QuizComponents/QuestionTemplate";
import CreateQuiz from "../../components/Quiz And Feedback Module/QuizComponents/CreateQuiz";
import { Provider } from "react-redux";
import Home from "../../components/Quiz And Feedback Module/QuizComponents/CreateQuiz";
import "../../Styles/Quiz And Feedback Module/CreateQuiz.css";
import { QuestionTemplate } from "../../components/Quiz And Feedback Module/QuizComponents/QuestionTemplate";

function CreateQuizView() {
  return (
    <>
      <Home />
      {/* <QuestionTemplate /> */}
    </>
  );
}

export default CreateQuizView;