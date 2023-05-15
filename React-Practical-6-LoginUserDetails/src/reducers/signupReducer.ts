

import { SIGN_UP, SignUpAction ,ComponentState} from '../actions/signupAction';

interface SignUpState {
  users: ComponentState[];
}

const initialState: SignUpState = {
  users: [],
};

export const signUpReducer = (state = initialState, action: SignUpAction): SignUpState => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default signUpReducer;
