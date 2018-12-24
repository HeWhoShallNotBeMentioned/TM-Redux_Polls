import { savePollAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
 
  export const ADD_ANSWER = 'ADD_ANSWER'
 
  function addAnswer ({ authedUser, id, answer }) {
   return {
     type: ADD_ANSWER,
     authedUser: authedUser,
     id: id,
     answer: answer,
   }
 }
 
  export function handleAddAnswer (answerData) {
   return async (dispatch) => {
     dispatch(showLoading());
     const kitteh = await savePollAnswer(answerData);
      dispatch(addAnswer(answerData));
      dispatch(hideLoading());
   }
 } 
