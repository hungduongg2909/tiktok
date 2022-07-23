import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from '../constants/postConstant';

const initialState = {
    requesting: false,
    success: false,
    messages: null,
    data: [],
};

function postReducers(state = initialState, payload) {
    switch (payload.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                requesting: true,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data,
            };
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message,
            };
        default:
            return state;
    }
}

export default postReducers;
