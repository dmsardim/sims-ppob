import { LIST_SERVICES } from '../actions/actionTypes';

const initialState = {
  services: [],
};

function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    default:
      return state;
  }
}

export default servicesReducer;
