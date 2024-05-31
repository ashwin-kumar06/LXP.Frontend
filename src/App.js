import React from 'react';
import { Provider } from 'react-redux';
import './App.css'
import "./Styles/Quiz And Feedback Module/CoursePage.css";
import "./Styles/Quiz And Feedback Module/CreateQuiz.css";
import store from './Store/Store';
import Routing from './routes/Routing';

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