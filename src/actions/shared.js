import {getInitialData} from '../utils/api';
import {receiveUsers} from './users';
import {receivePolls} from './polls';
import {setAuthedUser} from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'sarah_edo';

export function handleInitialData () {
  return async (dispatch) => {
    dispatch(showLoading());
    const response = await getInitialData();
    const polls = response.polls;
    const users = response.users;
    dispatch(receivePolls(polls));
    dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTHED_ID));
    dispatch(hideLoading());
  }
}