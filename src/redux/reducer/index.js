import { combineReducers } from 'redux';

import postReducer from './postReducer';
import authReducer from './auth';

const reducers = combineReducers({
    posts: postReducer,
    auth: authReducer,
});

// eslint-disable-next-line
export default (state, action) => reducers(state, action);
