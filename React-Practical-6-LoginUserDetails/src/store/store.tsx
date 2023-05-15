import { createStore, combineReducers } from 'redux';
import signUpReducer from "../reducers/signupReducer"

const rootReducer = combineReducers({
  signUp: signUpReducer,
});


export type RootState = ReturnType<typeof rootReducer>;


const store = createStore(rootReducer);

export default store;
