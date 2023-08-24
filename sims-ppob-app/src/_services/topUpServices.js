import { API } from '../_constants';
import Services from './config';

const topUp = async (token, data) => {
  const url = API.TOP_UP;
  const services = new Services(url, token);
  return await services.post(data);
};

export { topUp };
