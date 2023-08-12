import { DAFTAR_CUTI_TODAY } from '../../actions/DaftarCutiToday';

const initialState = {
  daftarCutiTodayLoading: false,
  daftarCutiTodayResult: false,
  daftarCutiTodayError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DAFTAR_CUTI_TODAY:
      return {
        ...state,
        daftarCutiTodayLoading: action.payload.loading,
        daftarCutiTodayResult: action.payload.data,
        daftarCutiTodayError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
