import React, { useState,useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FETCH_ALL_QUIZFEEDBACK_REQUEST,fetchallquizfeedbackSuccess,fetchallquizfeedbackFailure } from '../../actions/GetAllQuizFeedbackAction';
import { fetchallquizfeedbackRequest } from '../../actions/GetAllQuizFeedbackAction';
import { GetAllFeedbackApi } from '../../middleware/GetAllFeedbackApi';
import QuizFeedback from './QuizFeedback';
 
 
// export const GetAllFeedbacks=(GetAllFeedbackApi)=> {
 
  // const getallfeedback=useSelector((state)=>state.fetchfeedback.quizfeedback[0])
  export const GetAllFeedbacks=(GetAllFeedbackApi)=> {
 
    const getallfeedback=useSelector((state)=>state.fetchfeedback.quizfeedback[0])
    const [error, setError] = useState('');
    const [errorfb, setErrorfb] = useState('');
    const [loading, setLoading] = useState('');
    const [showAddfbModal, setShowAddfbModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [fbQuestion, setFbQuestion] = useState([]);
    const [selectedfbType, setSelectedfbType] = useState('');
    // useEffect(()=>{
    //   debugger
    //     dispatch(fetchallquizfeedbackRequest("22a43258-f99b-4b7b-98d9-40d5a3e09bc3"));
    // },[])
    useEffect(()=>{
        console.log(getallfeedback);
        dispatch(fetchallquizfeedbackRequest("22a43258-f99b-4b7b-98d9-40d5a3e09bc3"));
    },[])
    const handleSaveQuestion = () => {
        let tempfbErrors = { question: '', questionType: '', optionText: '' };
 
        if (!fbQuestion.question) {
            tempfbErrors.question = 'Question is required';
        }
        if (!fbQuestion.questionType) {
            tempfbErrors.questionType = 'Question type is required';
        }
        if (fbQuestion.options.length === 0 && fbQuestion.questionType =="MCQ") {
            tempfbErrors.optionText = 'At least one option is required';
        }
       
        setErrorfb(tempfbErrors);
 
        if (tempfbErrors.question || tempfbErrors.questionType || tempfbErrors.optionText ) {
            return;
        }
 
        // const requestBody = {
        //     quizId: "d609ff3e-5972-4340-97e0-7f46b55e8096",
        //     question: fbQuestion.question,
        //     questionType: fbQuestion.questionType,
        //     options: fbQuestion.options.map((optionText, index) => ({
        //         optionText: optionText
        //     }))
        // };
        //  console.log(requestBody)
        //  dispatch(fetchallquizfeedbackRequest(requestBody.quizId));
        handleCloseAddfbQuestionModal();
    };
 
    const handleTypeChange = () => {  
        setShowAddModal(true);
    };
    const handleModal = () => {  
        setShowAddfbModal(true);
       
    };
 
    const handleCloseAddfbQuestionModal = () => {
        setShowAddfbModal(false);
    };
 
    // useEffect(()=>{
    //     console.log("l",getallfeedback);
    // },[])
 
    // export const GetAllFeedbacks=(GetAllFeedbackApi)=> {
 
        // const getallfeedback=useSelector((state)=>state.fetchfeedback.quizfeedback[0])
        // other code...
     
        return (
          <div>
            <QuizFeedback/>
            <div className='question template container' >
              <div>
              <h5><b>Review Feedback Questions</b></h5>
                {getallfeedback && getallfeedback.length > 0 && getallfeedback.map((feedback, index) => (
                  <div key={index} className='card mt-3' style={{ backgroundColor: "rgb(237, 231, 231)"}}>
                    <div className='d-flex justify-content-end'>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Question {feedback.questionNo}:</h5>
                      <input value={feedback.question} className='form-control' readOnly />
                      <div className="form-group">
                        <label>Options:</label>
                        {feedback.options.map((option, index) => (
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
                ))}
              </div>
            </div>
          </div>
        )
      }
     
      export default GetAllFeedbacks
     

