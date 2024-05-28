import React, { useState, useContext, useEffect, useRef } from 'react';
import { connect, useSelector } from 'react-redux';
import BasicPagination from '../../components/QuizComponents/Pagination';
import { FaTrashCan } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { GetOpenEditQuestionModal } from '../../middleware/QuestionApi';
import { deleteQuizQuestionRequest } from '../../actions/DeleteQuizQuestionAction';
import { fetchAllQuizQuestionRequest } from '../../actions/FetchQuizQuestionsAction';
import { getMemoizedQuestions } from '../../selectors/QuizQuestionSelector';

const quizId = sessionStorage.getItem('quizId');
export function QuestionTemplate ({quizQuestions}) {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
  const [showEditQuestionModal, setShowEditQuestionModal] = useState(false);
  const questionsPerPage = 5;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuestionType, setSelectedQuestionType] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const fetch = useRef(false);
  const [questions, setQuestions] = useState([])
  const [editedQuestion, setEditedQuestion] = useState({
    question: '',
    options: ['', '', '', '', '', '', '', ''],
    correctOptions: ['', '', '']
  });



  useEffect(() => {
    // console.log("useeffect");
    fetchQuestions(quizId);
    // if(quizId){
    //   dispatch(fetchAllQuizQuestionRequest(quizId))
    // }
  },[quizId]);

  const fetchQuestions = async (quizId) => {
    console.log("useeffect");
    try {
      dispatch(fetchAllQuizQuestionRequest(quizId))
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  const question = useSelector(getMemoizedQuestions)

  console.log("question template",question);
  if(!fetch.current){
    setQuestions(question);
    fetch.current = true;
  }

  const handleOpenEditQuestionModal = async (quizQuestionId) => {
    try {
      const response = await GetOpenEditQuestionModal(quizQuestionId);
      const questionData = response;
      setEditedQuestion({
        quizQuestionId: quizQuestionId,
        question: questionData.question,
        questionType: questionData.questionType,
        options: questionData.options.map(option => option.option),
        correctOptions: questionData.options.filter(option => option.isCorrect).map(option => option.option)
      });
      setShowEditQuestionModal(true);
    } catch (error) {
      console.error('Error fetching question data:', error);
    }
  };

  const handleOpenAddQuestionModal = () => {
    setShowAddQuestionModal(true);
  };

  const handleDeleteQuestion = (quizQuestionId) => {
    // DeleteQuestion(quizQuestionId);
    dispatch(deleteQuizQuestionRequest(quizQuestionId))
    // window.location.reload();
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const newFilteredQuestions = questions.filter(question =>
      !selectedQuestionType || question.questionType === selectedQuestionType
    );
    setFilteredQuestions(newFilteredQuestions);
  }, [selectedQuestionType, questions]);

  const searchFilteredQuestions = questions.filter(question =>
    question.question.toLowerCase().includes(searchTerm) &&
    (!selectedQuestionType || question.questionType === selectedQuestionType)

  );

  return (
    <div className="">
      <div className='question template container'>
        {error && <p>Error: {error}</p>}
        {questions.length > 0 ? (
          <div style={{ marginTop: "-20%", marginLeft: "15%" }}>
            <h5>Uploaded Questions</h5>
            <div style={{ marginTop: "-6px", marginLeft: "68.5%" }}>
              {/* <Pagination/> */}

              <div>
                <BasicPagination
                  totalQuestions={filteredQuestions.length}
                  questionsPerPage={questionsPerPage}
                  page={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
            {/* {questions.filter(question => !selectedQuestionType || question.questionType === selectedQuestionType).map((question, index) => ( */}
            {questions.map((question, index) => (

              <div key={index} className='card mt-4' style={{ backgroundColor: "rgb(237, 231, 231)" }}>
                <div className='d-flex justify-content-end'>
                  <a onClick={() => { handleOpenEditQuestionModal(question.quizQuestionId) }} className='m-2 me-2'><AiFillEdit style={{ fontSize: "30", color: "#365486" }} /></a>
                  <a onClick={() => { handleDeleteQuestion(question.quizQuestionId) }} className='m-2 ms-3'><FaTrashCan style={{ fontSize: "23", color: "#365486" }} /></a>
                  {/* <Button class="btn btn-light" style={{marginLeft:"80%" , marginTop:"-3%" , backgroundColor:"#365486", color:"white"}} onClick={handleOpenQuizEditModal}><AiFillEdit/> Edit</Button>
                                <Button class="btn btn-light" style={{marginLeft:"89%" , marginTop:"-8.5%", backgroundColor:"#365486", color:"white"}} onClick={handleDeleteQuiz}><FaTrashCan/> Delete</Button> */}
                </div>
                <div className="card-body">
                  <h5 className='card-title'>Question Type : {question.questionType}</h5>
                  <h5 className="card-title">Question {question.questionNo}:</h5>

                  <input value={question.question} className='form-control' readOnly />
                  <div className="form-group">
                    <label>Options:</label>
                    {question.options.map((option, index) => (
                      <input
                        key={index}
                        type="text"
                        className="form-control mt-2"
                        value={option.option}
                        readOnly
                      />
                    ))}
                  </div>
                  <div className="form-group">
                    <label>Correct Answers:</label>
                    {question.options.filter(option => option.isCorrect).map((correctOption, index) => (
                      <input
                        key={index}
                        type="text"
                        className="form-control mt-2"
                        value={correctOption.option}
                        readOnly
                      />
                    ))}
                  </div>
                  <button onClick={handleOpenAddQuestionModal} className="btn btn-light mt-3 mb-5 float-right" style={{ backgroundColor: "#365486", color: "white" }}>Add More Question</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No questions match your search.</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  quizQuestions: state.quizQuestions.quizQuestions
});

export default connect(mapStateToProps)(QuestionTemplate);