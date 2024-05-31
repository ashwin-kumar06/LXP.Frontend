import CoursePage from '../../components/Quiz And Feedback Module/QuizComponents/CoursePage';
import { Provider } from 'react-redux';
import store from "../../Store/Store";
import '../../Styles/Quiz And Feedback Module/CreateQuiz.css'

function CoursePageView() {
  return (
    <>
        <CoursePage />
    </>
  );
}

export default CoursePageView;