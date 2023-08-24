import { LOADING } from "../actions/actionTypes";

const initialState = {
    loading: false,
};

function loadingReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
}

export default loadingReducer;