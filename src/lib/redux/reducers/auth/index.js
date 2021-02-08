import { SET_TOKEN, SET_USER, TOKEN, USER } from '../../actions/action_types/auth'
const initialState = {
    user: JSON.parse(localStorage.getItem('USER')) || null,
    token: JSON.parse(localStorage.getItem('TOKEN')) || null
}


const auth = (state = initialState, action) => {

    switch(action.type) {
        case TOKEN:
            return state.token

        case USER:
            return state.user
        
        case SET_TOKEN:
            return { ...state , token: action.value }
        
        case SET_USER:
            return { ...state , user: action.value }

        default:
            return state
    }
}

export default auth;