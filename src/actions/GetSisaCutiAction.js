import {
  Alert
} from 'react-native';
import axios from 'axios';
import {
  clearStorage,
  storeData
} from '../utils';
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess
} from '../utils';
import {
  API_HEADER,
  URL_API,
  API_TIMEOUT
} from '../utils/constant';

export const GET_SISA_CUTI = 'GET_SISA_CUTI';

export const getSisaCuti = id => {
  axios({
      method: 'get',
      url: URL_API + 'sisaCuti?id=' + id,
      timeout: API_TIMEOUT,
      headers: API_HEADER,
    })
    .then(response => {
      return response.data.data
    })
};