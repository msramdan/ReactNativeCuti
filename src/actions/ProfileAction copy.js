import {Alert} from 'react-native';
import axios from 'axios';
import {clearStorage, storeData} from '../utils';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';
import {API_HEADER, URL_API, API_TIMEOUT} from '../utils/constant';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const updateProfile = data => {
  return dispatch => {
    // LOADING
    const dataBaru = {
      nama_karyawan: data.nama_karyawan,
      no_hp: data.no_hp,
      alamat: data.alamat,
      nik: data.nik,
      id: data.id,
    };
    dispatchLoading(dispatch, UPDATE_PROFILE);
    axios({
      method: 'post',
      url: URL_API + 'updateProfile?id=' + data.id,
      timeout: API_TIMEOUT,
      headers: API_HEADER,
      data: {
        nama_karyawan: data.nama_karyawan,
        no_hp: data.no_hp,
        alamat: data.alamat,
      },
    })
      .then(response => {
        if (response.status !== 200) {
          dispatchError(dispatch, UPDATE_PROFILE, response);
          alert(error);
        } else {
          dispatchSuccess(dispatch, UPDATE_PROFILE, response.data.data);
          storeData('user', dataBaru);
        }
      })
      .catch(error => {
        dispatchError(dispatch, UPDATE_PROFILE, error.message);
        alert(error.message);
      });
  };
};

export const changePassword = data => {
  return dispatch => {
    dispatchLoading(dispatch, CHANGE_PASSWORD);
    axios({
      method: 'post',
      url: URL_API + 'changePassword?id=' + data.id,
      timeout: API_TIMEOUT,
      headers: API_HEADER,
      data: {
        password: data.password,
        newPassword: data.newPassword,
      },
    })
      .then(response => {
        // if (response.status !== 200) {
        //   dispatchError(dispatch, CHANGE_PASSWORD, response);
        //   alert(error);
        // } else {
          dispatchSuccess(dispatch, CHANGE_PASSWORD, response.data.data);
          clearStorage();
        // }
      })
      // .catch(error => {
      //   dispatchError(dispatch, CHANGE_PASSWORD, error.message);
      //   alert(error);
      // });
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      });

      
  };
};
