import {Alert} from 'react-native';
import {storeData} from '../utils';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const updateProfile = (data) => {
  return (dispatch) => {
    // LOADING
    dispatchLoading(dispatch, UPDATE_PROFILE);
    const dataBaru = {
      nama_karyawan: data.nama_karyawan,
      no_hp: data.no_hp,
      alamat: data.alamat,
    };
    console.log('asd');

  };
};

export const changePassword = (data) => {
  return (dispatch) => {
    dispatchLoading(dispatch, CHANGE_PASSWORD);

    //Cek dulu apakah benar email & password lama (login)
    FIREBASE.auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((response) => {
        //jika sukses maka update password
        var user = FIREBASE.auth().currentUser;

        user
          .updatePassword(data.newPassword)
          .then(function () {
            // Update successful.

            dispatchSuccess(dispatch, CHANGE_PASSWORD, 'Sukses Ganti Password');
            
          })
          .catch(function (error) {
            // An error happened.
            // ERROR
            dispatchError(dispatch, CHANGE_PASSWORD, error);

            alert(error);
          });
      })
      .catch((error) => {
        // ERROR
        dispatchError(dispatch, CHANGE_PASSWORD, error.message);

        alert(error.message);
      });
  };
};
