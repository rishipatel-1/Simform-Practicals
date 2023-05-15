import { createStore, combineReducers } from 'redux';
import signUpReducer from "../reducers/signupReducer"

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  signUp: signUpReducer,
});

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

// Create the Redux store
const store = createStore(rootReducer);

export default store;
