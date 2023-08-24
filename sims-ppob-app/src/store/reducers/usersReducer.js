import { REGISTER_SUCCESS, USER_AUTH, USER_PROFILE, USER_UPDATE_PROFILE, USER_BALANCE } from '../actions/actionTypes';

const initialState = {
  value: [],
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}

const initialAuthState = {
  token: '',
};

function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case USER_AUTH:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}

const initialProfileState = {
  data: {},
};

function profileReducer(state = initialProfileState, action) {
  switch (action.type) {
    case USER_PROFILE:
      return {
        ...state,
        data: action.payload,
      };
    case USER_UPDATE_PROFILE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

const initialBalanceState = {
  balance: {},
};
function balanceReducer(state = initialBalanceState, action) {
  switch (action.type) {
    case USER_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
    default:
      return state;
  }
}
export { usersReducer, authReducer, profileReducer, balanceReducer };
