import { LOG_IN, LOG_OUT } from '../constants/auth';

export const login = () => (dispatch) => {
    dispatch({ type: LOG_IN });
};

export const logout = () => (dispatch) => {
    dispatch({ type: LOG_OUT });
};
