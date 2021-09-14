import axios from 'axios';

const API_KEY = '927c1803';
const BASE_URL = `http://www.omdbapi.com`;

const sendRequest = ({method, params}) => {
  var options = {
    method,
    url: `${BASE_URL}`,
    params: {
      apikey: API_KEY,
      ...params,
    },
  };

  return axios.request(options);
};


export default sendRequest;
