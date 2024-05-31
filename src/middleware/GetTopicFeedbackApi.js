import axios from 'axios';
import { FETCH_ALL_TOPICFEEDBACK_REQUEST,fetchalltopicfeedbackSuccess,fetchalltopicfeedbackFailure } from '../actions/GetTopicFeedbackAction';

// const API_URL = 'http://localhost:5199/api/TopicFeedback';
 
export const GetTopicFeedbackApi = ({ dispatch }) => (next) => async (action) => {

  if (action.type === FETCH_ALL_TOPICFEEDBACK_REQUEST) {
    try {
      console.log("gettopic",action.payload);
      // Assuming 'action.payload' contains the data you want to senda
      const response = await axios.get(`http://localhost:5199/api/TopicFeedback/topic/${action.payload}`);
      console.log('API Response:', response.data); // Log the response data
      dispatch(fetchalltopicfeedbackSuccess(response.data.data)); // Dispatch success action with the response data                                            
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchalltopicfeedbackFailure(error.message));
    }
  }
  return next(action);
 
};
 