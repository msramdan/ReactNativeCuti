import { LIST_PENGAJUAN } from '../../actions/ListPengajuan';



const initialState = {
  getListPengajuanLoading: false,
  getListPengajuanResult: false,
  getListPengajuanError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST_PENGAJUAN:
      return {
        ...state,
        getListPengajuanLoading: action.payload.loading,
        getListPengajuanResult: action.payload.data,
        getListPengajuanError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
