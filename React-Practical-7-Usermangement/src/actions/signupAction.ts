// signupAction.ts

export const SIGN_UP = 'SIGN_UP';

// Action interface
export interface SignUpAction {
  type: typeof SIGN_UP;
  payload: ComponentState;
}

export interface ComponentState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
  mobile: string;
}

// Action creator
export const registerUser = (formValues: ComponentState): SignUpAction => {
  return {
    type: SIGN_UP,
    payload: formValues,
  };
};
