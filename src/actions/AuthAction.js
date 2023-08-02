import axios from 'axios';
import {
  API_HEADER,
  URL_API,
  API_TIMEOUT
} from '../utils/constant';
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
  storeData,
} from '../utils';
export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = (nik, password) => {
  return dispatch => {
    // LOADING
    dispatchLoading(dispatch, LOGIN_USER);
    axios({
        method: 'post',
        url: URL_API + 'login?nik=' + nik + '&password=' + password,
        timeout: API_TIMEOUT,
        headers: API_HEADER,
      })
      .then(response => {
        //SUKSES
        storeData('user', response.data.data, );
        dispatchSuccess(
          dispatch,
          LOGIN_USER,
          response.data.data,
        );
      })
      .catch(error => {
        dispatchError(dispatch, LOGIN_USER, error.message);
        alert(error.response.data.message);
      });
  };
};