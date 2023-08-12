import { combineReducers } from 'redux'
import AuthReducer from './auth'
import KontakReducer from './kontak'
import ProfileReducer from './profile'
import StatusPengajuanReducer from './pengajuan'
import PengajuanCutiReducer from './pengajuanCuti'
import sisaCutiReducer from './sisaCuti'
import daftarCutiReducer from './daftarCuti'

const rootReducer = combineReducers({
    KontakReducer,
    AuthReducer,
    ProfileReducer,
    StatusPengajuanReducer,
    PengajuanCutiReducer,
    sisaCutiReducer,
    daftarCutiReducer,
});

export default rootReducer