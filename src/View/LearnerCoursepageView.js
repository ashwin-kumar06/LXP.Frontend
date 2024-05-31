import { Provider } from 'react-redux';
import store from "../Store/Store";
import '../Styles/CreateQuiz.css'
import LearnerCoursepage from '../components/QuizComponents/LearnerCoursepage';

function LearnerCoursepageView() {
  return (
    <>
        <LearnerCoursepage/>
    </>
  );
}

export default LearnerCoursepageView;