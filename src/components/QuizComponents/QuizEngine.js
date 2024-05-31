// // components/QuizComponents/QuizEngine.js

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllQuizQuestionRequest } from '../../actions/FetchAllQuestionsAction';
// import { Button, Container, Row, Alert } from 'react-bootstrap';

// const QuizEngine = ({ quizId }) => {
//     const dispatch = useDispatch();
//     const questions = useSelector((state) => state.quizQuestions.questions);
//     const loading = useSelector((state) => state.quizQuestions.loading);
//     const error = useSelector((state) => state.quizQuestions.error);

//     useEffect(() => {
//         if (quizId) {
//             dispatch(fetchAllQuizQuestionRequest(quizId));
//         }
//     }, [dispatch, quizId]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//     if (!questions.length) return <div>No questions available</div>;

//     return (
//         <div className="quiz-engine">
//             <h2>Attempt the Quiz</h2>
//             <Container>
//                 {questions.map((question, index) => (
//                     <div key={index} className="question-card">
//                         <h5>Question {index + 1}:</h5>
//                         <p>{question.question}</p>
//                         <div className="options">
//                             {question.questionType === 'MCQ' || question.questionType === 'True/False' ? (
//                                 question.options.map((option, idx) => (
//                                     <div key={idx} className="form-check">
//                                         <input
//                                             className="form-check-input"
//                                             type="radio"
//                                             name={`question-${index}`}
//                                             id={`option-${index}-${idx}`}
//                                             value={option.optionText}
//                                         />
//                                         <label className="form-check-label" htmlFor={`option-${index}-${idx}`}>
//                                             {option.optionText}
//                                         </label>
//                                     </div>
//                                 ))
//                             ) : (
//                                 question.options.map((option, idx) => (
//                                     <div key={idx} className="form-check">
//                                         <input
//                                             className="form-check-input"
//                                             type="checkbox"
//                                             name={`question-${index}`}
//                                             id={`option-${index}-${idx}`}
//                                             value={option.optionText}
//                                         />
//                                         <label className="form-check-label" htmlFor={`option-${index}-${idx}`}>
//                                             {option.optionText}
//                                         </label>
//                                     </div>
//                                 ))
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </Container>
//         </div>
//     );
// };

// export default QuizEngine;






// QuizEngine component
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestionRequest } from '../../actions/DisplayAllQuestionsAction';

const QuizEngine = ({ quizId }) => {
    const dispatch = useDispatch();
    const { loading, questions, error } = useSelector((state) => state.quizQuestions); // Changed state key to quizQuestions

    useEffect(() => {
        dispatch(getAllQuestionRequest(quizId));
    }, [dispatch, quizId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            {questions && questions.length > 0 ? (
                questions.map((question, index) => (
                    <div key={question.quizQuestionId}>
                        <h3>Question {question.questionNo}: {question.question}</h3>
                        {question.questionType === 'MCQ' || question.questionType === 'TF' || question.questionType === 'T/F' ? (
                            question.options.map((option, index) => (
                                <div key={index}>
                                    <input type="radio" name={question.quizQuestionId} value={option.option} />
                                    {option.option}
                                </div>
                            ))
                        ) : (
                            question.options.map((option, index) => (
                                <div key={index}>
                                    <input type="checkbox" name={question.quizQuestionId} value={option.option} />
                                    {option.option}
                                </div>
                            ))
                        )}
                    </div>
                ))
            ) : (
                <p>No questions available</p>
            )}
        </div>
    );
};

export default QuizEngine;


























// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllQuestionRequest } from '../../actions/DisplayAllQuestionsAction';

// const QuizEngine = ({ quizId }) => {
//     const dispatch = useDispatch();
//     const { loading, questions, error } = useSelector((state) => state.quiz);

//     useEffect(() => {
//         dispatch(getAllQuestionRequest(quizId));
//     }, [dispatch, quizId]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     return (
//         <div>
//             {questions && questions.length > 0 ? (
//                 questions.map((question, index) => (
//                     <div key={question.quizQuestionId}>
//                         <h3>Question {question.questionNo}: {question.question}</h3>
//                         {question.questionType === 'MCQ' || question.questionType === 'TF' || question.questionType === 'T/F' ? (
//                             question.options.map((option, index) => (
//                                 <div key={index}>
//                                     <input type="radio" name={question.quizQuestionId} value={option.option} />
//                                     {option.option}
//                                 </div>
//                             ))
//                         ) : (
//                             question.options.map((option, index) => (
//                                 <div key={index}>
//                                     <input type="checkbox" name={question.quizQuestionId} value={option.option} />
//                                     {option.option}
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 ))
//             ) : (
//                 <p>No questions available</p>
//             )}
//         </div>
//     );
// };

// export default QuizEngine;

















































// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { fetchAllQuizQuestionRequest } from '../actions/FetchQuizQuestionsAction';
// import {fetchAllQuizQuestionRequest} from '../../actions/DisplayAllQuestionsAction';

// const QuizEngine = ({ quizId }) => {
//     const dispatch = useDispatch();
//     const { loading, questions, error } = useSelector((state) => state.quiz);

//     useEffect(() => {
//         dispatch(fetchAllQuizQuestionRequest(quizId));
//     }, [dispatch, quizId]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     return (
//         <div>
//             {questions.map((question) => (
//                 <div key={question.quizQuestionId}>
//                     <h3>{question.question}</h3>
//                     {question.questionType === 'MCQ' || question.questionType === 'TF' ? (
//                         question.options.map((option, index) => (
//                             <div key={index}>
//                                 <input type="radio" name={question.quizQuestionId} value={option.option} />
//                                 {option.option}
//                             </div>
//                         ))
//                     ) : (
//                         question.options.map((option, index) => (
//                             <div key={index}>
//                                 <input type="checkbox" name={question.quizQuestionId} value={option.option} />
//                                 {option.option}
//                             </div>
//                         ))
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default QuizEngine;