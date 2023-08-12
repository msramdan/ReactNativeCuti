
import { GET_SISA_CUTI } from '../../actions/GetSisaCutiAction';


const initialState = {
  getSisaCutiLoading: false,
  getSisaCutiResult: false,
  getSisaCutiError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SISA_CUTI:
      return {
        ...state,
        getSisaCutiLoading: action.payload.loading,
        getSisaCutiResult: action.payload.data,
        getSisaCutiError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
