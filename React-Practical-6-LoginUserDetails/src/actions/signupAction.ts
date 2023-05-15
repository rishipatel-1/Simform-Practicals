

export const SIGN_UP = 'SIGN_UP';

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

export const registerUser = (formValues: ComponentState): SignUpAction => {
  return {
    type: SIGN_UP,
    payload: formValues,
  };
};
