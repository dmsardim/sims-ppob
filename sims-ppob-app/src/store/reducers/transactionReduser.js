import { TRANSACTION_HISTORY } from '../actions/actionTypes';

const initialState = {
    value: [],
};

function transactionReducer(state = initialState, action) {
    switch (action.type) {
        case TRANSACTION_HISTORY:
            return {
                ...state,
                value: action.payload,
            };
        default:
            return state;
    }
}

export default transactionReducer;