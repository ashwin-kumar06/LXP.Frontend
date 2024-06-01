import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsRequest } from "../../../actions/Quiz And Feedback Module/AttemptQuizAction";
import "../../../Styles/Quiz And Feedback Module/AttemptQuiz.css";

export const AttemptQuiz = () => {
  const dispatch = useDispatch();
  const quizId = "0351082c-6b1d-4d53-b0b6-abfebbbe3531";
  const questions = useSelector((state) => state.AttemptQuiz.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    fetchQuestions(quizId);
  }, [quizId]);

  const fetchQuestions = async (quizId) => {
    try {
      dispatch(fetchQuestionsRequest(quizId));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Quiz submitted");
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
          {questions && questions.length > 0 ? (
            <>
              <div className="question-container">
                <h5>
                  {questions[currentQuestionIndex].questionNo}.{" "}
                  {questions[currentQuestionIndex].question}
                </h5>
                <ul>
                  {questions[currentQuestionIndex].options.map(
                    (option, optionIndex) => (
                      <li key={optionIndex}>
                        <input
                          type={
                            questions[currentQuestionIndex].questionType ===
                              "MCQ" ||
                            questions[currentQuestionIndex].questionType ===
                              "TF" ||
                            questions[currentQuestionIndex].questionType ===
                              "T/F"
                              ? "radio"
                              : "checkbox"
                          }
                          name={questions[currentQuestionIndex].quizQuestionId}
                          value={option.option}
                        />
                        {option.option}
                      </li>
                    )
                  )}
                </ul>
              </div>
              {currentQuestionIndex === questions.length - 1 && (
                <button className="submit-button" onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </>
          ) : (
            <p>No questions available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttemptQuiz;
