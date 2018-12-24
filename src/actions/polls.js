
import {savePoll} from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls: polls,
  }
}

function addPoll (poll) {
  return {
    type: ADD_POLL,
    poll: poll,
  }
}

export function handleAddPoll (poll) {
  return async (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading());
     const  doggo = await savePoll({...poll, author: authedUser});
    dispatch(addPoll(doggo));
    dispatch(hideLoading());
  }
}

