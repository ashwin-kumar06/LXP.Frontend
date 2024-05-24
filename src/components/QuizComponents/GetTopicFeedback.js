import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchalltopicfeedbackRequest } from '../../actions/GetTopicFeedbackAction';
import TopicFeedback from './TopicFeedback';
import { useLocation } from 'react-router';

export const GetTopicFeedback = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const topicId = searchParams.get('topicId');
  // Access the quizfeedback array from the Redux state
  const { topicfeedback } = useSelector((state) => state.fetchtopicfeedback);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch feedback when the component mounts
    dispatch(fetchalltopicfeedbackRequest(topicId));
  }, [dispatch]);

  

  return (
    <div>
      <TopicFeedback/>
      <div className='question template container'>
        <div>
          <h5><b>Review Feedback Questions</b></h5>
          {topicfeedback && topicfeedback.length > 0 ? (
            topicfeedback.map((feedback, index) => (
              <div key={index} className='card mt-3' style={{ backgroundColor: "rgb(237, 231, 231)" }}>
                <div className="card-body">
                  <h5 className="card-title">Question {feedback.questionNo}:</h5>
                  <input value={feedback.question} className='form-control' readOnly />
                  <div className="form-group">
                    <label>Options:</label>
                    {feedback.options && feedback.options.map((option, index) => (
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
    </div>
  );
};

export default GetTopicFeedback;
