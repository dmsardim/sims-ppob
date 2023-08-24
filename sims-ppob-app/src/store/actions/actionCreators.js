import { REGISTER_SUCCESS, USER_AUTH, USER_PROFILE, USER_UPDATE_PROFILE, LOADING, USER_BALANCE, LIST_SERVICES, BANNER, TRANSACTION_HISTORY } from './actionTypes';

import { loginUser, registerUser, getUserProfile, updateUserProfile, getUserBalance, topUp, service, getBanner, getTransactionHistory, postTransaction, updateImageProfile } from '../../_services';

import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const constRegisterSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload: payload,
  };
};

export const constUserAuth = (payload) => {
  return {
    type: USER_AUTH,
    payload: payload,
  };
};

export const constUserProfile = (payload) => {
  return {
    type: USER_PROFILE,
    payload: payload,
  };
};

export const constUserUpdateProfile = (payload) => {
  return {
    type: USER_UPDATE_PROFILE,
    payload: payload,
  };
};

export const constUserBalance = (payload) => {
  return {
    type: USER_BALANCE,
    payload: payload,
  };
};

export const loading = (payload) => {
  return {
    type: LOADING,
    payload: payload,
  };
};

export const constListServices = (payload) => {
  return {
    type: LIST_SERVICES,
    payload: payload,
  };
};

export const getListTransactionHistory = (payload) => {
  return {
    type: TRANSACTION_HISTORY,
    payload: payload,
  };
};

export const constBanner = (payload) => {
  return {
    type: BANNER,
    payload: payload,
  };
};
export const postUserRegister = (newUser) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const response = await registerUser(newUser);
      dispatch(constRegisterSuccess(response));
    } catch (error) {
      console.log('Maaf server bermasalah');
    } finally {
      dispatch(loading(false));
    }
  };
};

export const postUserLogin = (data) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const { data: response } = await loginUser(data);
      localStorage.setItem('token', response.data.token);
      Toast.fire({
        icon: 'success',
        title: 'Login success',
      });
    } catch (error) {
      throw error;
    } finally {
      dispatch(loading(false));
    }
  };
};

export const getProfile = (token) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const { data: response } = await getUserProfile(token);
      dispatch(constUserProfile(response.data));
    } catch (error) {
      throw error;
    } finally {
      dispatch(loading(false));
    }
  };
};

export const updateProfile = (token, data) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const { data: response } = await updateUserProfile(token, data);
      dispatch(constUserUpdateProfile(response.data));
      Toast.fire({
        icon: 'success',
        title: 'Profile updated successfully',
      });
    } catch (error) {
      throw error;
    } finally {
      dispatch(loading(false));
    }
  };
};

export const userBalance = (token) => {
  return async (dispatch) => {
    try {
      const { data: response } = await getUserBalance(token);
      dispatch(constUserBalance(response.data));
    } catch (error) {
      console.log('Maaf server bermasalah');
    }
  };
};

export const topUpBalance = (token, data) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      await topUp(token, data);
      dispatch(userBalance(token));
    } catch (error) {
      console.log('Maaf server bermasalah');
    } finally {
      dispatch(loading(false));
    }
  };
};

export const listServices = (token) => {
  return async (dispatch) => {
    try {
      const { data: response } = await service(token);
      dispatch(constListServices(response.data));
    } catch (error) {
      console.log('Maaf server bermasalah');
    }
  };
};

export const transactionHistory = (token, data) => {
  return async (dispatch) => {
    try {
      const { data: response } = await getTransactionHistory(token, data);
      dispatch(getListTransactionHistory(response.data.records));
    } catch (error) {
      console.log('Maaf server bermasalah');
    }
  };
};

export const listBanner = (token) => {
  return async (dispatch) => {
    try {
      const { data: response } = await getBanner(token);
      dispatch(constBanner(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const transactionCreate = (token, data) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const { data: response } = await postTransaction(token, data);
      if (response) {
        Toast.fire({
          icon: 'success',
          title: 'Transaction success',
        });
        dispatch(transactionHistory(token, { limit: 5 }));
        dispatch(userBalance(token));
      }
    } catch (error) {
      throw error;
    } finally {
      dispatch(loading(false));
    }
  };
};

export const uploadImageProfile = (token, data) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      await updateImageProfile(token, data);
      dispatch(getProfile(token));
      Toast.fire({
        icon: 'success',
        title: 'Profile updated successfully',
      });
    } catch (error) {
      throw error;
    } finally {
      dispatch(loading(false));
    }
  };
};
