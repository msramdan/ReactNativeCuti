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

export const storePengajuan = data => {
  return dispatch => {
    // LOADING
    console.log(data);
    dispatchLoading(dispatch, STORE_PENGAJUAN);
    var a = moment(data.selectedStartDate).format("Y-M-D");
    var b = moment(data.selectedEndDate).format("Y-M-D");
    axios({
        method: 'post',
        url: URL_API +
          'formPengajuan?jenis_cuti=' +
          data.jenisCuti +
          '&alasan=' +
          data.alasan +
          '&karyawan_id=' +
          data.id +
          '&selectedStartDate=' +
          a +
          '&selectedEndDate=' +
          b+
          '&avatar=' +
          data.avatar,
        timeout: API_TIMEOUT,
        headers: API_HEADER,
        data: {
          avatarForDB: data.avatarForDB,
        },
      })
      .then(response => {
        console.log('success');
        dispatchSuccess(dispatch, STORE_PENGAJUAN, response.data.data);
      })
      .catch(error => {
        console.log('error');
        dispatchError(dispatch, STORE_PENGAJUAN, error.message);
        alert(error.response.data.message);
      });
  };
};