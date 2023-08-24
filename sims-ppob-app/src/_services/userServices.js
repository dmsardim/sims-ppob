import { API } from '../_constants';
import Services from './config';

const loginUser = async (data) => {
  const url = API.LOGIN;
  const services = new Services(url);
  return await services.postWithoutToken(data);
};

const registerUser = async (data) => {
  const url = API.REGISTER;
  const services = new Services(url);
  return await services.postWithoutToken(data);
};

const getUserProfile = async (token) => {
  const url = API.PROFILE;
  const services = new Services(url, token);
  return await services.get();
};

const updateUserProfile = async (token, data) => {
  const url = API.PROFILE_UPDATE;
  const services = new Services(url, token);
  return await services.put(data);
};

const getUserBalance = async (token) => {
  const url = API.GET_BALANCE;
  const services = new Services(url, token);
  return await services.get();
};

const updateImageProfile = async (token, data) => {
  const url = API.PROFILE_IMAGE;
  const services = new Services(url, token);
  return await services.uploadFile(data);
};

export { loginUser, registerUser, getUserProfile, updateUserProfile, getUserBalance, updateImageProfile };
