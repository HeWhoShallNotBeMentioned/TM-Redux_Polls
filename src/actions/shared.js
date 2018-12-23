import {getInitialData} from '../utils/api';
import {receiveUsers} from './users';
import {receivePolls} from './polls';
import {setAuthedUser} from './authedUser'

const AUTHED_ID = 'sarah_edo';

export function handleInitialData () {
  return async (dispatch) => {
    const response = await getInitialData();
    const polls = response.polls;
    const users = response.users;
    dispatch(receivePolls(polls));
    dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTHED_ID));
  }
}