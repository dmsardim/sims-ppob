import { API } from '../_constants';
import Services from './config';

const getBanner = async (token) => {
  const url = API.GET_BANNER;
  const services = new Services(url, token);
  return await services.get();
};

export { getBanner };
