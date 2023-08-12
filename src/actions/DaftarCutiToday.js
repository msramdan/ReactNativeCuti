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
  
  export const DAFTAR_CUTI_TODAY = 'DAFTAR_CUTI_TODAY';
  
  export const daftarCutiToday = () => {
    return dispatch => {
      // LOADING
      dispatchLoading(dispatch, DAFTAR_CUTI_TODAY);
      axios({
          method: 'get',
          url: URL_API + 'daftarCutiToday',
          timeout: API_TIMEOUT,
          headers: API_HEADER,
        })
        .then(response => {
          if (response.status !== 200) {
            dispatchError(dispatch, DAFTAR_CUTI_TODAY, response);
            alert(error);
          } else {
            dispatchSuccess(dispatch, DAFTAR_CUTI_TODAY, response.data.data);
          }
        })
        .catch(error => {
          dispatchError(dispatch, DAFTAR_CUTI_TODAY, error.message);
          alert(error.message);
        });
    };
  };
  