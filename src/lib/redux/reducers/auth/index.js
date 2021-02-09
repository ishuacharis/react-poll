import { 
    SET_TOKEN, 
    SET_USER, TOKEN, 
    USER, DELETE_USER, 
    DELETE_TOKEN,
    LOADING} 
from '../../actions/action_types/auth'

import { authInitialState } from '../../states/auth'

const auth = (state = authInitialState, action) => {

    switch(action.type) {
        case TOKEN:
            return state.token

        case USER:
            return state.user
        
        case SET_TOKEN:
            return { ...state , token: action.value }
        
        case SET_USER:
            return { ...state , user: action.value }

        case DELETE_USER:
            return { ...state , user: null, }

        case DELETE_TOKEN:
            return { ...state , token: null ,}

        case LOADING:
            return { ...state , isLoading: action.value}

        default:
            return state
    }
}

export default auth;