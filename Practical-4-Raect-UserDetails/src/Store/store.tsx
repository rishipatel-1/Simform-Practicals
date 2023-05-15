import { createStore } from 'redux';
import rootReducer, { AppState } from '../reducer/reducer';

const store = createStore(rootReducer);

export default store;
export type { AppState };
