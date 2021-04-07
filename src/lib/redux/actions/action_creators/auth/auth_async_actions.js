import { handleLogOut } from "lib/routes"
import { deleteToken, deleteUser, setLoading, setToken, setUser } from "./index";


export const authenticate  = (details, cb) => {
    
    return async function login (dispatch, getState){
        try {
            const response  = await cb(details)
            const user  = response['response']['user'];
            const token  = response['response']['token'];
            localStorage.setItem('REACT_USER', JSON.stringify(user));
            localStorage.setItem('REACT_TOKEN', JSON.stringify(token));
            dispatch(setUser(user))
            dispatch(setToken(token))
        } catch (error) {
            
            console.log("hehheheh")
        }


    }
}

export const unAuthenticate =  (details) => {
    return async function logout(dispatch, getState) {
        dispatch(setLoading(true))
        const response  = await handleLogOut(details)
        if ('response' in response) {

            localStorage.removeItem('REACT_USER')
            localStorage.removeItem('REACT_TOKEN')
            dispatch(deleteUser())
            dispatch(deleteToken())
            dispatch(setLoading(false))
        }
    }
}