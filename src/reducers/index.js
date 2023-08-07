import { combineReducers } from 'redux'
import AuthReducer from './auth'
import KontakReducer from './kontak'
import ProfileReducer from './profile'
// import LigaReducer from './liga'
// import JerseyReducer from './jersey'
import StatusPengajuanReducer from './pengajuan'
// import PaymentReducer from './payment'
// import PesananReducer from './pesanan'
// import HistoryReducer from './history'

const rootReducer = combineReducers({
    KontakReducer,
    AuthReducer,
    ProfileReducer,
    // LigaReducer,
    // JerseyReducer,
    StatusPengajuanReducer,
    // PaymentReducer,
    // PesananReducer,
    // HistoryReducer
});

export default rootReducer