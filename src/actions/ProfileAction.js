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

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const updateProfile = data => {
  return dispatch => {
    // LOADING
    dispatchLoading(dispatch, UPDATE_PROFILE);
    const dataBaru = {
      nama_karyawan: data.nama_karyawan,
      no_hp: data.no_hp,
      alamat: data.alamat,
      nik: data.nik,
      id: data.id,
    };
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
          clearStorage();
          Alert.alert('Sukses', 'Update Profile Success');
          dispatchSuccess(dispatch, UPDATE_PROFILE, response.data.data);
          
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
        clearStorage();
        Alert.alert('Sukses', 'Change Password Success');
        dispatchSuccess(dispatch, CHANGE_PASSWORD, response.data.data);
        
      })
      .catch(function (error) {
        dispatchError(dispatch, CHANGE_PASSWORD, error.response.data.message);
        alert(error.response.data.message);
      });
  };
};