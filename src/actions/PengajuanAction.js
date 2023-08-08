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
export const STORE_PENGAJUAN = 'STORE_PENGAJUAN';

export const storePengajuan = (jenis_cuti, alasan, karyawan_id) => {
  return dispatch => {
    // LOADING
    dispatchLoading(dispatch, STORE_PENGAJUAN);
    console.log(karyawan_id);
    axios({
        method: 'post',
        url: URL_API +
          'formPengajuan?jenis_cuti=' +
          jenis_cuti +
          '&alasan=' +
          alasan +
          '&karyawan_id=' +
          karyawan_id,
        timeout: API_TIMEOUT,
        headers: API_HEADER,
      })
      .then(response => {
        dispatchSuccess(dispatch, STORE_PENGAJUAN, response.data.data);
      })
      .catch(error => {
        dispatchError(dispatch, STORE_PENGAJUAN, error.message);
        alert(error.response.data.message);
      });
  };
};