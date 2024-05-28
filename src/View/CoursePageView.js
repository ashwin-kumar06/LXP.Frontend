import CoursePage from '../components/QuizComponents/CoursePage';
import { Provider } from 'react-redux';
import store from "../Store/Store";
import '../Styles/CreateQuiz.css'

function CoursePageView() {
  return (
    <>
        <CoursePage />
    </>
  );
}

export default CoursePageView;