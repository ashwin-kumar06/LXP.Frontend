import React, { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../Styles/Quiz And Feedback Module/CreateQuiz.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { createquizfeedbackRequest } from "../../../actions/Quiz And Feedback Module/QuizFeedbackAction";
import ReviewQuestions from "../../../components/Quiz And Feedback Module/QuizComponents/ReviewQuestions";

export const QuizFeedback = () => {
  const location = useLocation();
  const [errorfb, setErrorfb] = useState("");
  const [loading, setLoading] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAddfbModal, setShowAddfbModal] = useState(false);
  const searchParams = new URLSearchParams(location.search);
  const quizId = searchParams.get("quizId");
  const topicId = searchParams.get("topicId");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    try {
      // await GetAllQuestion();
      navigate("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const [fbQuestion, setFbQuestion] = useState({
    question: "",
    questionType: "",
    options: ["", "", "", "", "", "", "", ""],
  });
  const [selectedfbType, setSelectedfbType] = useState("");

  const handleFeedback = () => {
    try {
      // navigate("/");
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };

  const handleSaveQuestion = () => {
    let tempfbErrors = { question: "", questionType: "", optionText: "" };

    if (!fbQuestion.question) {
      tempfbErrors.question = "Question is required";
    }
    if (!fbQuestion.questionType) {
      tempfbErrors.questionType = "Question type is required";
    }
    if (fbQuestion.options.length === 0 && fbQuestion.questionType == "MCQ") {
      tempfbErrors.optionText = "At least one option is required";
    }

    setErrorfb(tempfbErrors);

    if (
      tempfbErrors.question ||
      tempfbErrors.questionType ||
      tempfbErrors.optionText
    ) {
      return;
    }

    const requestBody = {
      quizId: quizId,
      question: fbQuestion.question,
      questionType: fbQuestion.questionType,
      options: fbQuestion.options.map((optionText, index) => ({
        optionText: optionText,
        // isCorrect: fbQuestion.correctOptions.includes(option) // Check if option is in correctOptions array
      })),
    };
    console.log(requestBody);

    dispatch(createquizfeedbackRequest(requestBody));
    handleCloseAddfbQuestionModal();
  };

  const handleOpenAddfbQuestionModal = () => {
    setShowAddfbModal(true);
  };

  const handleCloseAddfbQuestionModal = () => {
    setShowAddfbModal(false);
    // setTimeout(window.location.reload(),1000)
    // window.location.reload();
  };
  const handleChange = (index, field, value) => {
    const updatedoptions = [...fbQuestion.options];
    updatedoptions[index] = value;
    setFbQuestion({ ...fbQuestion, options: updatedoptions });

    setFbQuestion((prevState) => ({
      ...prevState,
      [field]:
        index === -1
          ? value
          : [
              ...prevState[field].slice(0, index),
              value,
              ...prevState[field].slice(index + 1),
            ],
    }));
  };

  const handlefbQuestionTypeChange = (e) => {
    const value = e.target.value;
    setSelectedfbType(value);
    setFbQuestion((prevState) => ({
      ...prevState,
      questionType: value,
      options: [],
    }));
  };

  const handleNavigate = () => {
    navigate(`/reviewquestions?quizId=${quizId}&topicId=${topicId}`);
  };

  return (
    <div>
      <button
        class="btn btn-light"
        style={{
          marginLeft: "95%",
          marginTop: "5%",
          backgroundColor: "#365486",
          color: "white",
          width: "50",
        }}
        onClick={() => {
          handleNavigate();
        }}
      >
        Back
      </button>

      <div>
        <AdminNavbar />
        <div>
          <h4 className="text" style={{ marginLeft: "10%", marginTop: "-40%" }}>
            <b>Feedback Questions for the Quiz</b>
          </h4>
          <button
            onClick={handleOpenAddfbQuestionModal}
            className="btn btn-light mt-3 mb-5 float-right"
            style={{
              backgroundColor: "#365486",
              color: "white",
              marginLeft: "43%",
            }}
          >
            Add Feedback Questions
          </button>

          <Modal show={showAddfbModal} onHide={handleCloseAddfbQuestionModal}>
            <Modal.Header
              closeButton
              style={{ backgroundColor: "#23275c", color: "whitesmoke" }}
            >
              <h5>Add Feedback Questions</h5>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "rgb(237, 231, 231)" }}>
              <div className="form-group">
                <label>Question Type</label>
                <select
                  className="form-control"
                  value={selectedfbType}
                  onChange={handlefbQuestionTypeChange}
                >
                  <option value="">Select Question Type</option>
                  <option value="MCQ">MCQ</option>
                  <option value="Descriptive">Descriptive</option>
                </select>
                {errorfb.questionType && (
                  <div style={{ color: "red" }}>{errorfb.questionType}</div>
                )}
              </div>

              {selectedfbType === "MCQ" && (
                <>
                  <div className="form-group">
                    <label>
                      Question: <b id="required">*</b>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={fbQuestion.question}
                      onChange={(e) =>
                        handleChange(-1, "question", e.target.value)
                      }
                    />
                    {errorfb.question && (
                      <div style={{ color: "red" }}>{errorfb.question}</div>
                    )}
                  </div>
                  {[...Array(4)].map((_, index) => (
                    <div className="form-group" key={index}>
                      <label>
                        Option {index + 1} <b id="required">*</b>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={fbQuestion.options[index] || ""}
                        onChange={(e) =>
                          handleChange(index, "options", e.target.value)
                        }
                      />
                      {errorfb.options && (
                        <div style={{ color: "red" }}>{errorfb.options}</div>
                      )}
                    </div>
                  ))}
                </>
              )}

              {selectedfbType === "Descriptive" && (
                <>
                  <div className="form-group">
                    <label>Question:</label>
                    <input
                      className="form-control"
                      type="text"
                      value={fbQuestion.question}
                      onChange={(e) =>
                        handleChange(-1, "question", e.target.value)
                      }
                    />
                    {errorfb.question && (
                      <div style={{ color: "red" }}>{errorfb.question}</div>
                    )}
                  </div>
                </>
              )}
            </Modal.Body>

            <Modal.Footer style={{ backgroundColor: "rgb(237, 231, 231)" }}>
              <Button
                variant="default"
                style={{ backgroundColor: "#365486", color: "whitesmoke" }}
                onClick={handleCloseAddfbQuestionModal}
              >
                Close
              </Button>
              <Button
                variant="default"
                style={{ backgroundColor: "#365486", color: "whitesmoke" }}
                onClick={() => {
                  handleSaveQuestion();
                }}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default QuizFeedback;
