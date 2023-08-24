import { BANNER } from '../actions/actionTypes';

const initialState = {
  banner: [],
};

function bannerReducer(state = initialState, action) {
  switch (action.type) {
    case BANNER:
      return {
        ...state,
        banner: action.payload,
      };
    default:
      return state;
  }
}

export default bannerReducer;
