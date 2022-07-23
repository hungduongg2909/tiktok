import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from '../constants/postConstant';

export const loadPosts = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_POSTS_REQUEST });

        const url = 'https://62d050fc1cc14f8c08889d06.mockapi.io/tiktok/suggest';
        const response = await fetch(url);
        const responseBody = await response.json();

        dispatch({
            type: FETCH_POSTS_SUCCESS,
            data: responseBody,
        });
    } catch (error) {
        console.log(error);

        dispatch({ type: FETCH_POSTS_ERROR, messages: error });
    }
};
