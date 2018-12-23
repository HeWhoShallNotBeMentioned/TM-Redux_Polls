import {getinitialData} from '../utils/api';
import {receiveUsers} from './users';
import {receivePolls} from './polls';
import {setAuthedUser} from './authedUser'

const AUTHED_ID = 'sarah_edo';

export function handleInitialData () {
  return async (dispatch) => {
    const response = await getinitialData();
    polls = response.polls;
    users = response.users;
    dispatch(receivePolls(polls));
    dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTHED_ID));
  }
}