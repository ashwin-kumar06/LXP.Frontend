import React from 'react';
import '../../Styles/ReviewAnswers.css';

const ReviewAnswers = ({ reviewData }) => {
  return (
    <div className="review-container">
      {reviewData.map((question, index) => (
        <div key={question.quizQuestionId} className="question-container">
          <h5>{index + 1}: {question.question}</h5>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <input
                  type="radio"
                  name={question.quizQuestionId}
                  value={option.option}
                  checked={option.option === question.selectedOption}
                  readOnly
                />
                {option.option}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ReviewAnswers;