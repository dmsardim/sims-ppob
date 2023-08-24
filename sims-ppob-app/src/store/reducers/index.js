import { combineReducers } from 'redux';
import { usersReducer, authReducer, profileReducer, balanceReducer,  } from './usersReducer';
import loadingReducer from './loadingReducer';
import servicesReducer from './servicesReducer';
import transactionReducer from './transactionReduser';
import bannerReducer from './bannerReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  profile: profileReducer,
  loading: loadingReducer,
  balance: balanceReducer,
  services: servicesReducer,
  transaction: transactionReducer,
  banner: bannerReducer,
});

export default rootReducer;
