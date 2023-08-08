import {storePengajuanCuti_KONTAK} from '../../actions/AuthAction';


const initialState = {
  storePengajuanCutiLoading: false,
  storePengajuanCutiResult: false,
  storePengajuanCutiError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case storePengajuanCuti_KONTAK:
      return {
        ...state,
        storePengajuanCutiLoading: action.payload.loading,
        storePengajuanCutiResult: action.payload.data,
        storePengajuanCutiError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
