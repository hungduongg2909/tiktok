import { getAuth } from 'firebase/auth';

import { LOG_IN, LOG_OUT } from '../constants/auth';

export const confirmAuth = () => (dispatch) => {
    const auth = getAuth();

    if (auth.currentUser) {
        console.log(auth.currentUser);
        dispatch({ type: LOG_IN });
    } else {
        dispatch({ type: LOG_OUT });
    }
};
