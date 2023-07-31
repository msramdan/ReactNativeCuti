import { combineReducers } from 'redux'
import AuthReducer from './auth'
import KontakReducer from './kontak'
import ProfileReducer from './profile'
// import LigaReducer from './liga'
// import JerseyReducer from './jersey'
// import KeranjangReducer from './keranjang'
// import PaymentReducer from './payment'
// import PesananReducer from './pesanan'
// import HistoryReducer from './history'

const rootReducer = combineReducers({
    KontakReducer,
    AuthReducer,
    ProfileReducer,
    // LigaReducer,
    // JerseyReducer,
    // KeranjangReducer,
    // PaymentReducer,
    // PesananReducer,
    // HistoryReducer
});

export default rootReducer