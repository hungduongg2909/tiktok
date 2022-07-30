import { OPEN_MODAL, CLOSE_MODAL } from '../constants/modal';

const initialState = {
    isModal: true,
    effect: 'open',
};

function modalReducer(state = initialState, payload) {
    switch (payload.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isModal: false,
                effect: 'open',
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isModal: true,
                effect: 'close',
            };
        default:
            return state;
    }
}

export default modalReducer;
