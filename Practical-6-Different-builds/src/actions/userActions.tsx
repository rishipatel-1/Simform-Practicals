import { User } from "../reducer/reducer";

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';


interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[];
}

export type UserActionTypes = FetchUsersSuccessAction;

export const fetchUsersSuccess = (users: User[]): UserActionTypes => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
