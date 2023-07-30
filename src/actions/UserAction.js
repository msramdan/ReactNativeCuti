import axios from 'axios';
import {API_HEADER, URL_API, API_TIMEOUT} from '../utils/constant';
import {dispatchError, dispatchLoading, dispatchSuccess, getData} from '../utils';

export const GET_USER = 'GET_USER';
export const getUser = (id) => {
  return dispatch => {
    // LOADING
    dispatchLoading(dispatch, GET_USER);
    axios({
      method: 'get',
      url: URL_API + 'getProfile/' + id,
      timeout: API_TIMEOUT,
      headers: API_HEADER,
    })
      .then(response => {
        if (response.status !== 200) {
          // ERROR
          dispatchError(dispatch, GET_USER, response);
          alert(error);
        } else {
          //SUKSES
          dispatchSuccess(
            dispatch,
            GET_USER,
            response.data.data,
          );
        }
      })
      .catch(error => {
        // ERROR
        dispatchError(dispatch, GET_USER, error);
        alert(error);
      });
  };
};
