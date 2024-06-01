import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestionsRequest } from '../../actions/AttemptQuizAction';
import { fetchReviewRequest } from '../../actions/ReviewAction';
import ReviewAnswers from './ReviewAnswers';
import '../../Styles/AttemptQuiz.css';

export const AttemptQuiz = () => {
  const dispatch = useDispatch();
  const quizId = "1cf196c9-e9f7-4224-83be-e2d3dca69976";
  const questions = useSelector((state) => state.AttemptQuiz.questions);
  const reviewData = useSelector((state) => state.Review.reviewData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isReviewMode, setIsReviewMode] = useState(false);

  useEffect(() => {
    fetchQuestions(quizId);
  }, [quizId]);

  const fetchQuestions = async (quizId) => {
    try {
      dispatch(fetchQuestionsRequest(quizId));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = () => {
    const attemptId = "08dc8226-a608-420f-8a83-a3f0009aaf24";
    dispatch(fetchReviewRequest(attemptId));
    setIsReviewMode(true);
  };

  return (
    <div className="attempt-quiz-page">
      <h1 className="quiz-title">Attempt Quiz</h1>
      <div className="quiz-content">
        <div className="navbar">
          {questions && questions.length > 0 ? (
            questions.map((_, index) => (
              <button key={index} onClick={() => handleQuestionClick(index)}>
                {index + 1}
              </button>
            ))
          ) : (
            <p>No questions available</p>
          )}
        </div>
        <div className="main-content1">
          {questions && questions.length > 0 && !isReviewMode ? (
            <>
              <div className="question-container">
                <h5>{questions[currentQuestionIndex].questionNo}. {questions[currentQuestionIndex].question}</h5>
                <ul>
                  {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <input
                        type={questions[currentQuestionIndex].questionType === 'MCQ' || questions[currentQuestionIndex].questionType === 'TF' || questions[currentQuestionIndex].questionType === 'T/F' ? 'radio' : 'checkbox'}
                        name={questions[currentQuestionIndex].quizQuestionId}
                        value={option.option}
                      />
                      {option.option}
                    </li>
                  ))}
                </ul>
              </div>
              {currentQuestionIndex === questions.length - 1 && (
                <button className="submit-button" onClick={handleSubmit}>Review</button>
              )}
            </>
          ) : (
            <ReviewAnswers reviewData={reviewData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AttemptQuiz;
























// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchQuestionsRequest } from '../../actions/AttemptQuizAction';
// import { fetchReviewRequest } from '../../actions/ReviewAction';
// import '../../Styles/AttemptQuiz.css';

// export const AttemptQuiz = () => {
//   const dispatch = useDispatch();
//   const quizId = "1cf196c9-e9f7-4224-83be-e2d3dca69976";
//   const questions = useSelector((state) => state.AttemptQuiz.questions);
//   const reviewData = useSelector((state) => state.Review.reviewData);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [isReviewMode, setIsReviewMode] = useState(false);

//   useEffect(() => {
//     fetchQuestions(quizId);
//   }, [quizId]);

//   const fetchQuestions = async (quizId) => {
//     try {
//       dispatch(fetchQuestionsRequest(quizId));
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleQuestionClick = (index) => {
//     setCurrentQuestionIndex(index);
//   };

//   const handleSubmit = () => {
//     const attemptId = "08dc8226-a608-420f-8a83-a3f0009aaf24";
//     dispatch(fetchReviewRequest(attemptId));
//     setIsReviewMode(true);
//   };

//   return (
//     <div className="attempt-quiz-page">
//       <h1 className="quiz-title">Attempt Quiz</h1>
//       <div className="quiz-content">
//         <div className="navbar">
//           {questions && questions.length > 0 ? (
//             questions.map((_, index) => (
//               <button key={index} onClick={() => handleQuestionClick(index)}>
//                 {index + 1}
//               </button>
//             ))
//           ) : (
//             <p>No questions available</p>
//           )}
//         </div>
//         <div className="main-content1">
//           {questions && questions.length > 0 && !isReviewMode ? (
//             <>
//               <div className="question-container">
//                 <h5>{questions[currentQuestionIndex].questionNo}. {questions[currentQuestionIndex].question}</h5>
//                 <ul>
//                   {questions[currentQuestionIndex].options.map((option, optionIndex) => (
//                     <li key={optionIndex}>
//                       <input
//                         type={questions[currentQuestionIndex].questionType === 'MCQ' || questions[currentQuestionIndex].questionType === 'TF' || questions[currentQuestionIndex].questionType === 'T/F' ? 'radio' : 'checkbox'}
//                         name={questions[currentQuestionIndex].quizQuestionId}
//                         value={option.option}
//                       />
//                       {option.option}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               {currentQuestionIndex === questions.length - 1 && (
//                 <button className="submit-button" onClick={handleSubmit}>Review</button>
//               )}
//             </>
//           ) : (
//             <>
//               {reviewData && reviewData.length > 0 ? (
//                 <div className="review-container">
//                   {reviewData.map((question, index) => (
//                     <div key={question.quizQuestionId} className="question-container">
//                       <h5>Question {index + 1}: {question.question}</h5>
//                       <p>Selected Option: {question.selectedOption}</p>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>No review data available</p>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttemptQuiz;




























// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchQuestionsRequest } from '../../actions/AttemptQuizAction';
// import '../../Styles/AttemptQuiz.css';

// export const AttemptQuiz = () => {
//   const dispatch = useDispatch();
//   const quizId = "1cf196c9-e9f7-4224-83be-e2d3dca69976";
//   const questions = useSelector((state) => state.AttemptQuiz.questions);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   useEffect(() => {
//     fetchQuestions(quizId);
//   }, [quizId]);

//   const fetchQuestions = async (quizId) => {
//     try {
//       dispatch(fetchQuestionsRequest(quizId));
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleQuestionClick = (index) => {
//     setCurrentQuestionIndex(index);
//   };

//   const handleSubmit = () => {
//     // Handle form submission logic here
//     console.log('Quiz submitted');
//   };

//   return (
//     <div className="attempt-quiz-page">
//       <h1 className="quiz-title">Attempt Quiz</h1>
//       <div className="quiz-content">
//         <div className="navbar">
//           {questions && questions.length > 0 ? (
//             questions.map((_, index) => (
//               <button key={index} onClick={() => handleQuestionClick(index)}>
//                 {index + 1}
//               </button>
//             ))
//           ) : (
//             <p>No questions available</p>
//           )}
//         </div>
//         <div className="main-content1">
//           {questions && questions.length > 0 ? (
//             <>
//               <div className="question-container">
//                 <h5>{questions[currentQuestionIndex].questionNo}. {questions[currentQuestionIndex].question}</h5>
//                 <ul>
//                   {questions[currentQuestionIndex].options.map((option, optionIndex) => (
//                     <li key={optionIndex}>
//                       <input
//                         type={questions[currentQuestionIndex].questionType === 'MCQ' || questions[currentQuestionIndex].questionType === 'TF' || questions[currentQuestionIndex].questionType === 'T/F' ? 'radio' : 'checkbox'}
//                         name={questions[currentQuestionIndex].quizQuestionId}
//                         value={option.option}
//                       />
//                       {option.option}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               {currentQuestionIndex === questions.length - 1 && (
//                 <button className="submit-button" onClick={handleSubmit}>Review</button>
//               )}
//             </>
//           ) : (
//             <p>No questions available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttemptQuiz;























































// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchQuestionsRequest } from '../../actions/AttemptQuizAction';
// import '../../Styles/AttemptQuiz.css';

// export const AttemptQuiz = () => {
//   const dispatch = useDispatch();
//   const quizId = "2bc763c7-a3fe-43cd-aa08-5236d1cbc672";
//   const questions = useSelector((state) => state.AttemptQuiz.questions);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   useEffect(() => {
//     fetchQuestions(quizId);
//   }, [quizId]);

//   const fetchQuestions = async (quizId) => {
//     try {
//       dispatch(fetchQuestionsRequest(quizId));
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleQuestionClick = (index) => {
//     setCurrentQuestionIndex(index);
//   };

//   const handleSubmit = () => {
//     // Handle form submission logic here
//     console.log('Quiz submitted');
//   };

//   return (
//     <div className="attempt-quiz-container">
//       <div className="navbar">
//         <ul>
//           {questions && questions.length > 0 ? (
//             questions.map((_, index) => (
//               <li key={index}>
//                 <button onClick={() => handleQuestionClick(index)}>
//                   Question {index + 1}
//                 </button>
//               </li>
//             ))
//           ) : (
//             <li>No questions available</li>
//           )}
//         </ul>
//       </div>
//       <div className="main-content">
//         <h1>Attempt Quiz</h1>
//         {questions && questions.length > 0 ? (
//           <div className="question-container">
//             <h5>Question {questions[currentQuestionIndex].questionNo}: {questions[currentQuestionIndex].question}</h5>
//             <ul>
//               {questions[currentQuestionIndex].options.map((option, optionIndex) => (
//                 <li key={optionIndex}>
//                   <input
//                     type={questions[currentQuestionIndex].questionType === 'MCQ' || questions[currentQuestionIndex].questionType === 'TF' || questions[currentQuestionIndex].questionType === 'T/F' ? 'radio' : 'checkbox'}
//                     name={questions[currentQuestionIndex].quizQuestionId}
//                     value={option.option}
//                   />
//                   {option.option}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <p>No questions available</p>
//         )}
//         <button className="submit-button" onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default AttemptQuiz;