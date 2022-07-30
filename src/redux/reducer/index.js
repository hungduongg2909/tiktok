import { combineReducers } from 'redux';

import postReducer from './postReducer';
import authReducer from './auth';
import modalReducer from './modalReducer';

const reducers = combineReducers({
    posts: postReducer,
    auth: authReducer,
    modal: modalReducer,
});

// eslint-disable-next-line
export default (state, action) => reducers(state, action);
