import axios from 'axios';
import {API_HEADER, URL_API, API_TIMEOUT} from '../utils/constant';
import {dispatchError, dispatchLoading, dispatchSuccess, storeData} from '../utils';

export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = () => {
  return dispatch => {
    // LOADING
    dispatchLoading(dispatch, LOGIN_USER);
    axios({
      method: 'get',
      url: URL_API + 'getProfile/' + 12,
      timeout: API_TIMEOUT,
      headers: API_HEADER,
    })
      .then(response => {
        if (response.status !== 200) {
          // ERROR
          dispatchError(dispatch, LOGIN_USER, response);
          alert('Ada error kak');
        } else {
          //SUKSES
          dispatchSuccess(dispatch, LOGIN_USER, response.data.data);
          //Local Storage (Async Storage)
          storeData('user', response.data.data);
        }
      })
      .catch(error => {
        console.log('siniqa');
        // ERROR
        dispatchError(dispatch, LOGIN_USER, error);
        alert('User Tidak ditemukan');
      });
  };
};
