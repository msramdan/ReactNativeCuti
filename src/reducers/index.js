import { combineReducers } from 'redux'
import AuthReducer from './auth'
import KontakReducer from './kontak'
import ProfileReducer from './profile'
import StatusPengajuanReducer from './pengajuan'
import PengajuanCutiReducer from './pengajuanCuti'

const rootReducer = combineReducers({
    KontakReducer,
    AuthReducer,
    ProfileReducer,
    StatusPengajuanReducer,
    PengajuanCutiReducer,
});

export default rootReducer