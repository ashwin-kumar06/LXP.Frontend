import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchalltopicfeedbackRequest } from "../../actions/GetTopicFeedbackAction";
import TopicFeedback from "./TopicFeedback";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashCan } from "react-icons/fa6";
import Alert from "@mui/material/Alert";
import { deletetopicfeedbackRequest } from "../../actions/DeleteTopicFeedbackAction";
import { fetchtopicfeedbackRequest } from "../../actions/GetByIDTopicFeedbackAction";
import { updatetopicfeedbackRequest } from "../../actions/UpdateTopicFeedbackAction";

export const GetTopicFeedback = () => {
  const { topicFeedbackId } = useParams();
  //  const getallfeedback = useSelector(
  //    (state) => state.fetchtopicfeedback.quizfeedback[0]
  //  );
  const [errorfb, setErrorfb] = useState("");
  const [showAddfbModal, setShowAddfbModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [errors, setErrors] = useState("");
  const [showEditfbQuestionModal, setShowEditfbQuestionModal] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const topicId = sessionStorage.getItem('topicId')
  // Access the quizfeedback array from the Redux state
  const { topicfeedback } = useSelector((state) => state.fetchtopicfeedback);
  const dispatch = useDispatch();
  const [fbQuestion, setFbQuestion] = useState([]);
  const [editedQuestion, setEditedQuestion] = useState({
    question: "",
    questionType: "",
    options: [],
  }); /// going to store the value of edit

  const getfeedback = useSelector(
    (state) => state.fetchtopicfeedbackid.quizfeedback
  );
  console.log("hi", getfeedback);
  useEffect(() => {
    // Fetch feedback when the component mounts
    dispatch(fetchalltopicfeedbackRequest(topicId));
  }, [dispatch]);

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
    handleCloseAddfbQuestionModal();
  };
  const handleCloseAddfbQuestionModal = () => {
    setShowAddfbModal(false);
  };
  const handleCloseEditQuestionModal = () => {
    setShowEditfbQuestionModal(false);
    window.location.reload();

  };

  const validateField = (fieldName, value, index = null) => {
    let tempErrors = { ...errors };
    switch (fieldName) {
      case "question":
        tempErrors.question = value ? "" : "Question is required";
        break;
      case "options":
        if (index !== null) {
          if (!tempErrors.individualOptions) {
            tempErrors.individualOptions = [];
          }
          tempErrors.individualOptions[index] = value
            ? ""
            : `Option ${index + 1} is required`;
        }
        tempErrors.options = editedQuestion.options.some((option) => option)
          ? ""
          : "option is required";
        break;
      case "correctOptions":
        if (index !== null) {
          if (!tempErrors.individualCorrectOptions) {
            tempErrors.individualCorrectOptions = [];
          }
          tempErrors.individualCorrectOptions[index] = value
            ? ""
            : `Correct Option ${index + 1} is required`;
        }
        tempErrors.correctOptions = editedQuestion.correctOptions.some(
          (option) => option
        )
          ? ""
          : "correct option is required";
        break;
      default:
        break;
    }

    setErrors(tempErrors);
  };

  const handleUpdateQuestion = () => {
    const { topicFeedbackId, questionType, ...updatedQuestion } =
      editedQuestion;
    debugger;
    const updatedOptions = updatedQuestion.options.map((optionText, index) => ({
      optionText,
    }));

    const requestBody = {
      ...updatedQuestion,
      questionType: questionType,
      topicId: topicId,
      options: updatedOptions,
    };
    console.log("requestBody", requestBody);
    console.log("quizre", topicFeedbackId);
    dispatch(updatetopicfeedbackRequest(topicFeedbackId, requestBody));
    handleCloseEditQuestionModal();
  };

  const validUpdatedQuestion = (event) => {
    event.preventDefault();
    handleUpdateQuestion();
    
  };
  const handleOpenEditQuestionModal = async (TopicFeedbackQuestionId) => {
    // setShowEditfbQuestionModal(true);
    debugger;
  
    dispatch(fetchtopicfeedbackRequest(TopicFeedbackQuestionId));
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log("ki", getfeedback);
    debugger;
    if (getfeedback && getfeedback.options) {
      setShowEditfbQuestionModal(true);
    setEditedQuestion({
      topicFeedbackId: TopicFeedbackQuestionId,
      question: getfeedback.question,
      questionType: getfeedback.questionType,
      options: getfeedback.options.map((options) => options.optionText),
    });
    debugger;
    console.log(editedQuestion);
  };}

  const handleDeletetopicfbQuestion = (topicFeedbackId) => {
    dispatch(deletetopicfeedbackRequest(topicFeedbackId));
    // <Alert severity="success">Deleted Topic Feedback Question</Alert>;
    // window.location.reload();
    // debugger;
  };

  
  const handleNavigate = () => {
    navigate('/');
  }


  const handleCloseModal = () => {
    setShowAddModal(false);
  };

  const handleTypeChange = () => {
    setShowAddModal(true);
  };

  return (
    <div>
        <div>
           <button class="btn btn-light" style={{ marginLeft: "95%", marginTop: "5%", backgroundColor: "#365486", color: "white", width: '50' }} onClick={() => { handleNavigate() }} >Back</button>
            </div>
      <TopicFeedback />
      <div className="question template container">
        <div>
          <h5>
            <b>Review Feedback Questions</b>
          </h5>
          {topicfeedback && topicfeedback.length > 0 ? (
            topicfeedback.map((feedback, index) => (
              <div
                key={index}
                className="card mt-3"
                style={{ backgroundColor: "rgb(237, 231, 231)" }}
              >
                <div className="d-flex justify-content-end">
                  <a
                    onClick={() => {
                      handleOpenEditQuestionModal(feedback.topicFeedbackId);
                    }}
                    className="m-2 me-2"
                  >
                    <AiFillEdit style={{ fontSize: "30", color: "#365486" }} />
                  </a>
                  <a
                    onClick={() => {
                      handleDeletetopicfbQuestion(feedback.topicFeedbackId);
                    }}
                    className="m-2 ms-3"
                  >
                    <FaTrashCan style={{ fontSize: "23", color: "#365486" }} />
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Question {feedback.questionNo}:
                  </h5>
                  <input
                    value={feedback.question}
                    className="form-control"
                    readOnly
                  />
                  <div className="form-group">
                    <label>Options:</label>
                    {feedback.options &&
                      feedback.options.map((option, index) => (
                        <input
                          key={index}
                          type="text"
                          className="form-control mt-2"
                          value={option.optionText}
                          readOnly
                        />
                      ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No feedback questions available.</p>
          )}
        </div>
      </div>
      <div>
      <button onClick={handleTypeChange} className="btn btn-light mt-3 mb-5 float-right" style={{ backgroundColor: "#365486", color: "white", marginLeft: "85%" }}>Submit</button>
      <Modal show={showAddModal} onHide={handleCloseModal}>
        <Modal.Header closeButton style={{ backgroundColor: "#23275c" }}>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "rgb(237, 231, 231)" }}>
          <div onClick={handleTypeChange}><Alert severity="success" color='info'>TopicFeedback Published successfully !</Alert></div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(237, 231, 231)" }}>
          <Button className="btn btn-light mt-1 mb-5" style={{ backgroundColor: "#365486", color: "white", marginLeft: "55%" }} onClick={() => { handleCloseModal(); handleNavigate(); }}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
      <Modal
        show={showEditfbQuestionModal}
        onHide={handleCloseEditQuestionModal}
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#23275c", color: "whitesmoke" }}
        >
          <Modal.Title>
            <h5>Edit Question</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "rgb(237, 231, 231)" }}>
          <div className="form-group">
            <label>Question:</label>
            <input
              className="form-control"
              type="text"
              value={editedQuestion.question}
              onChange={(e) => {
                console.log("p", e.target.value);
                setEditedQuestion({
                  ...editedQuestion,
                  question: e.target.value,
                });

                validateField("question", e.target.value);
                //   setEditedQuestion (e.target.value)
                //                             setEditedQuestion(prevState => ({
                //   ...prevState,
                //   question: e.target.value
                //                             }))
              }}
            />
            {errors.question && (
              <div style={{ color: "red" }}>{errors.question}</div>
            )}
          </div>

          {editedQuestion &&
            editedQuestion.options &&
            editedQuestion.options.map((option, index) => (
              <div className="form-group" key={index}>
                <label>Option {index + 1}:</label>
                <input
                  className="form-control"
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const updatedOptions = [...editedQuestion.options];
                    updatedOptions[index] = e.target.value;
                    setEditedQuestion({
                      ...editedQuestion,
                      options: updatedOptions,
                    });
                    // validateField('options', e.target.value);
                  }}
                />

                {errors.individualoptions &&
                  errors.individualOptions[index] && (
                    <div style={{ color: "red" }}>
                      {errors.individualOptions[index]}
                    </div>
                  )}
              </div>
            ))}
          {errors.options && (
            <div style={{ color: "red" }}>{errors.options}</div>
          )}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(237, 231, 231)" }}>
          <Button  variant="default" onClick={handleCloseEditQuestionModal}>
            Close
          </Button>
          <Button variant="default" onClick={validUpdatedQuestion}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GetTopicFeedback;
