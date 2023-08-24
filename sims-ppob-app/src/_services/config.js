import axios from 'axios';

export default class Services {
  constructor(url, token) {
    this.url = url;
    this.token = token;
    this.config = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
  }

  heandleError(error) {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/auth/login';
      }
    } else if (error.request) {
      console.log(error.request);
    }
    return error;
  }

  async get(param) {
    if (!this.token || !this.url || !this.config) {
      throw new Error('Token, url, atau config tidak boleh kosong');
    }
    if (param) {
      this.config.params = param;
    }
    try {
      return await axios.get(this.url, this.config);
    } catch (error) {
      throw this.heandleError(error);
    }
  }

  async post(data) {
    if (!this.token || !this.url || !this.config) {
      throw new Error('Token, url, atau config tidak boleh kosong');
    }
    try {
      return await axios.post(this.url, data, this.config);
    } catch (error) {
      throw this.heandleError(error);
    }
  }

  async postWithoutToken(data) {
    if (!this.url) {
      throw new Error('Url tidak boleh kosong');
    }
    try {
      return await axios.post(this.url, data);
    } catch (error) {
      throw this.heandleError(error);
    }
  }

  async put(data) {
    if (!this.token || !this.url || !this.config) {
      throw new Error('Token, url, atau config tidak boleh kosong');
    }
    try {
      return await axios.put(this.url, data, this.config);
    } catch (error) {
      throw this.heandleError(error);
    }
  }

  async uploadFile(data) {
    if (!this.token || !this.url || !this.config) {
      throw new Error('Token, url, atau config tidak boleh kosong');
    }
    this.config.headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${this.token}`,
    };
    try {
      return await axios.put(this.url, data, this.config);
    } catch (error) {
      throw this.heandleError(error);
    }
  }

  async delete() {
    if (!this.token || !this.url || !this.config) {
      throw new Error('Token, url, atau config tidak boleh kosong');
    }
    try {
      return await axios.delete(this.url, this.config);
    } catch (error) {
      throw this.heandleError(error);
    }
  }
}
