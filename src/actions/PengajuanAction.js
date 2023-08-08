import axios from 'axios';
import moment from 'moment';
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

export const storePengajuan = (jenis_cuti, alasan, karyawan_id, selectedStartDate, selectedEndDate) => {
  return dispatch => {
    // LOADING
    dispatchLoading(dispatch, STORE_PENGAJUAN);
    var a = moment(selectedStartDate).format("Y-M-D");
    var b = moment(selectedEndDate).format("Y-M-D");
    axios({
        method: 'post',
        url: URL_API +
          'formPengajuan?jenis_cuti=' +
          jenis_cuti +
          '&alasan=' +
          alasan +
          '&karyawan_id=' +
          karyawan_id +
          '&selectedStartDate=' +
          a +
          '&selectedEndDate=' +
          b,
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