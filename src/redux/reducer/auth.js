import { LOG_IN, LOG_OUT } from '../constants/auth';

const initialState = {
    isAuth: false,
};

function authReducer(state = initialState, payload) {
    switch (payload.type) {
        case LOG_IN:
            return {
                ...state,
                isAuth: true,
            };
        case LOG_OUT:
            return {
                ...state,
                isAuth: false,
            };
        default:
            return state;
    }
}

export default authReducer;
