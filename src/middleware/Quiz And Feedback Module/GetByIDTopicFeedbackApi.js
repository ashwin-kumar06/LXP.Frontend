
import React from "react";

import axios from "axios";
// import {
//   FETCH_TOPICFEEDBACK_REQUEST,
//   fetchtopicfeedbackSuccess,
//   fetchtopicfeedbackFailure,
// } from "../actions/GetByIDTopicFeedbackAction";
import { FETCH_TOPICFEEDBACK_REQUEST,fetchtopicfeedbackSuccess,fetchtopicfeedbackFailure } from "../../actions/Quiz And Feedback Module/GetByIDTopicFeedbackAction";

const API_URL = "http://localhost:5199/api/TopicFeedback";

export const GetByIDTopicFeedbackApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type == FETCH_TOPICFEEDBACK_REQUEST) {
      try {
        debugger;
        console.log("fetch topic feedback", action.payload);
        // Assuming 'action.payload' contains the data you want to senda
        const url = `${API_URL}/${action.payload}`;
        const response = await axios.get(url);
        console.log("Get API Response:", response.data); // Log the response data
        dispatch(fetchtopicfeedbackSuccess(response.data.data)); // Dispatch success action with the response data
      } catch (error) {
        console.error("API Error:", error.message);
        dispatch(fetchtopicfeedbackFailure(error.message));
      }
    }
    return next(action);
  };





export default GetByIDTopicFeedbackApi
