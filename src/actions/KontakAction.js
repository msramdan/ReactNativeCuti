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
export const STORE_KONTAK = 'STORE_KONTAK';

export const storeKontak = (judul, deskripsi, karyawan_id) =>
  {
    return dispatch => {
      // LOADING
      dispatchLoading(dispatch, STORE_KONTAK);
      axios({
          method: 'post',
          url: URL_API + 'store?judul=' + judul + '&deskripsi=' + deskripsi+ '&karyawan_id=' + karyawan_id,
          timeout: API_TIMEOUT,
          headers: API_HEADER,
        })
        .then(response => {
          if (response.status !== 200) {
            // ERROR
            dispatchError(dispatch, STORE_KONTAK, response);
            alert(error);
          } else {
            //SUKSES
            dispatchSuccess(
              dispatch,
              STORE_KONTAK,
              response.data.data,
            );
          }
        })
        .catch(error => {
          // ERROR
          dispatchError(dispatch, STORE_KONTAK, error.message);
          alert(error.message);
        });
    };
  };