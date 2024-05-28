import CreateQuiz from "../components/QuizComponents/CreateQuiz";
import { Provider } from 'react-redux';
import Home from "../components/QuizComponents/CreateQuiz";
import '../Styles/CreateQuiz.css'
import { QuestionTemplate } from "../components/QuizComponents/QuestionTemplate";

function CreateQuizView() {
  return (
    <>
      <Home />
      {/* <QuestionTemplate /> */}
    </>
  );
}

export default CreateQuizView;