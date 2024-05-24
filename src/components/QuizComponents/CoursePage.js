import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoLogoHtml5 } from "react-icons/io5";
import { PiFileCssFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { fetchQuizById } from '../../middleware/api';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchQuizIdRequest } from '../../actions/CreateQuizAction';

function CoursePage() {

  const [noQuizTopicId, setNoQuizTopicId] = useState('98f8f96d-844e-4da1-8464-204984cdd8f1');
  const [yesQuizTopicId, setYesQuizTopicId] = useState('e3a895e4-1b3f-45b8-9c0a-98f9c0fa4996')
  const quizId = useSelector((state) => state.quizId.quizId);
  const isSuccess = useSelector((state) => state.quizId.isSubmitted);
  const noQuizId = useSelector((state) => state.quizId.noQuiz);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [topicId, setTopicId] = useState('');


  // useEffect(() => {
  //   if(isSuccess){
  //     navigate(`/createquiz?quizId=${quizId}&topicId=${topicId}`);
  //   }
  // });

  const handleAddQuiz = async (topicId) => {
    setTopicId(topicId);
    dispatch(fetchQuizIdRequest(topicId));
    // const result = await fetchQuizById(topicId);
    if (isSuccess) {
      navigate(`/createquiz?quizId=${quizId}&topicId=${topicId}`);
    }
  };

  const handleFeedback = (topicId) => {
    try {
      navigate(`/topicfeedback?topicId=${topicId}`);
    } catch (error) {
      console.error('Error navigating:', error);
    }
  };

  const handleQuizFeedback = async (topicId) => {
    try {
      dispatch(fetchQuizById(topicId));
      // setQuizId(id);
      // navigate(`/quizfeedback?quizId=${id}&topicId=${topicId}`);
    } catch (error) {
      console.error('Error navigating:', error);
    }
  };

  return (
    <div>
      <h5 style={{ marginTop: "5%", textAlign: "center", color: "midnightblue" }}>Course Page</h5>
      <Accordion id="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header><IoLogoHtml5 style={{ fontSize: "30px", color: "orange" }} /><b>Introduction to HTML</b></Accordion.Header>
          <Accordion.Body>
            <ul>
              {['HTML Basic', 'HTML Elements', 'Html Attributes', 'Html Styles', 'Html Tables'].map((topic) => (
                <li key={topic}>
                  {topic}
                  <div className="topic-buttons">
                    <Button variant="primary" size="sm" onClick={() => { handleAddQuiz(yesQuizTopicId) }}>Add Quiz</Button>
                    <Button variant="secondary" size="sm" onClick={() => { handleFeedback(yesQuizTopicId) }} style={{ marginLeft: "5px" }}>Add Feedback</Button>
                    <Button variant="secondary" size="sm" onClick={() => { handleQuizFeedback(yesQuizTopicId) }} style={{ marginLeft: "5px" }}>Add Quiz Feedback</Button>

                  </div>
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><PiFileCssFill style={{ fontSize: "30px", color: "midnightblue" }} /><b>CSS</b></Accordion.Header>
          <Accordion.Body>
            <ul>
              {['Introduction to CSS', 'CSS Elements', 'CSS Selectors'].map((topic) => (
                <li key={topic}>
                  {topic}
                  <div className="topic-buttons">
                    <Button variant="primary" size="sm" onClick={() => { handleAddQuiz(noQuizTopicId) }}>Add Quiz</Button>
                    <Button onClick={() => { handleFeedback(noQuizTopicId) }} variant="secondary" size="sm" style={{ marginLeft: "5px" }}>Add Feedback</Button>
                    <Button onClick={() => { handleQuizFeedback(noQuizTopicId) }} variant="secondary" size="sm" style={{ marginLeft: "5px" }}>Add Quiz Feedback</Button>
                  </div>
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default CoursePage;
