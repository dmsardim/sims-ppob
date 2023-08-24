const API_URL = 'https://take-home-test-api.nutech-integrasi.app';

const API = {
  LOGIN: `${API_URL}/login`,
  REGISTER: `${API_URL}/registration`,
  PROFILE: `${API_URL}/profile`,
  PROFILE_UPDATE: `${API_URL}/profile/update`,
  PROFILE_IMAGE: `${API_URL}/profile/image`,
  GET_BALANCE: `${API_URL}/balance`,
  TOP_UP: `${API_URL}/topup`,
  GET_SERVICES: `${API_URL}/services`,
  TRANSACTION : `${API_URL}/transaction`,
  GET_TRANSACTION_HISTORY: `${API_URL}/transaction/history`,
  GET_BANNER: `${API_URL}/banner`,
};

export default API;
