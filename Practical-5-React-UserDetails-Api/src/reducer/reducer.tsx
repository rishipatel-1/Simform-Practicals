import { UserActionTypes, FETCH_USERS_SUCCESS } from '../actions/userActions';

export interface User {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  status: boolean;
  access: string;
  clicksReviewed: number;
  MonthlyClicks: number;
  planUses: number;
}

export interface AppState {
  users: User[];
}

const initialState: AppState = {
  users: [],
};

const rootReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
