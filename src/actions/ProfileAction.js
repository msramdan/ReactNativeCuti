import {Alert} from 'react-native';
import axios from 'axios';
import {storeData} from '../utils';
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
    console.log('sini');
  };
};
