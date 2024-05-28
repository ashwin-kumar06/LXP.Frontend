import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateQuizView from './View/CreateQuizView';
import QuizEditor from './components/QuizEditor';
import { Provider } from 'react-redux';
import UploadBulkQuiz from './components/QuizComponents/UploadBulkQuiz';
import CoursePage from "./components/QuizComponents/CoursePage";
import ReviewQuestions from './components/QuizComponents/ReviewQuestions';
import './App.css'
import './Styles/CoursePage.css'
import './Styles/CreateQuiz.css'
import  GetAllFeedbacks  from './components/QuizComponents/GetAllFeedbacks';
import QuestionTemplateView from './View/QuestionTemplateView';
import store from './Store/Store';
import GetTopicFeedback from './components/QuizComponents/GetTopicFeedback';
import CoursePageView from './View/CoursePageView';
import Routing from './routers/Routing';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routing/>
      </Provider>
    </div>
  )};
export default App;



















// import './App.css';
// import {Routes, Route} from 'react-router-dom'
// import QuizEditorView from './view/QuizEditorView';


// function App() {
//   return (
//     <div className="App">
//      <Routes>
//         <Route path="quizEditorview" element={<QuizEditorView/>} /> 
//       </Routes>
//     </div>
    
//   );
// }
// export default App;
























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;