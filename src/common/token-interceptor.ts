import axios from 'axios';
import Router from 'next/router';

axios.interceptors.request.use(
  function (config) {
    const id = sessionStorage.getItem('id');
    if (config) {
      let customConfig = { ...config?.headers };

      customConfig = {
        ...customConfig,
        'Content-Type': 'application/json',
        Authorization: id,
      };
      config.headers = customConfig;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(undefined, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response) {
      const {
        response: { status },
      } = error;
      if (status === 401) {
        // logout usr
        sessionStorage.clear();
        Router.push('/login');
      } else {
        return Promise.reject(error);
      }
    }
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
