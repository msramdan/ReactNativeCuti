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
  
  export const LIST_PENGAJUAN = 'LIST_PENGAJUAN';
  
  export const getListPengajuan = data => {
    return dispatch => {
      // LOADING
      dispatchLoading(dispatch, LIST_PENGAJUAN);
      axios({
          method: 'get',
          url: URL_API + 'getListPengajuan?id=' + data,
          timeout: API_TIMEOUT,
          headers: API_HEADER,
        })
        .then(response => {
          if (response.status !== 200) {
            dispatchError(dispatch, LIST_PENGAJUAN, response);
            alert(error);
          } else {
            console.log( response.data.data);
            dispatchSuccess(dispatch, LIST_PENGAJUAN, response.data.data);
          }
        })
        .catch(error => {
          dispatchError(dispatch, LIST_PENGAJUAN, error.message);
          alert(error.message);
        });
    };
  };
  