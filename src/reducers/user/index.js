import { GET_USER } from '../../actions/UserAction'

const initialState = {
    dataUserLoading : false,
    dataUser: false,
    dataUserError: false,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                dataUserLoading: action.payload.loading,
                dataUser: action.payload.data,
                dataUserError: action.payload.errorMessage,
            }
        default:
            return state
    }
}

