import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../actions/quizActions';

const ViewQuizQuestions = ({ quizId }) => {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);
  
  useEffect(() => {
    dispatch(fetchQuestions(quizId));
  }, [dispatch, quizId]);

  return (
    <div>
      {quiz.loading && <p>Loading...</p>}
      {quiz.error && <p>Error: {quiz.error}</p>}
      <ul>
        {quiz.questions.map((question) => (
          <li key={question.quizQuestionId}>
            <h3>{question.question}</h3>
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>{option.option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewQuizQuestions;