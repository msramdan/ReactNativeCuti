import {STORE_KONTAK} from '../../actions/AuthAction';


const initialState = {
  storeLoading: false,
  storeResult: false,
  storeError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STORE_KONTAK:
      return {
        ...state,
        storeLoading: action.payload.loading,
        storeResult: action.payload.data,
        storeError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
