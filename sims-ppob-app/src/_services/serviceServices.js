import { API } from '../_constants';
import Services from './config';

const service = async (token, data) => {
  const url = API.GET_SERVICES;
  const services = new Services(url, token);
  return await services.get();
};

export { service };
