import { handleLogin, handleLogOut } from "../../../../utils/utils"
import { deleteToken, deleteUser, setLoading, setToken, setUser } from "./auth";


export const authenticate  = (details) => {
    
    return async function login (dispatch, getState){
        
        try {
            const response  = await handleLogin(details)
            const user  = response['response']['user'];
            const token  = response['response']['token'];
            localStorage.setItem('USER', JSON.stringify(user));
            localStorage.setItem('TOKEN', JSON.stringify(token));
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

            localStorage.removeItem('USER')
            localStorage.removeItem('TOKEN')
            dispatch(deleteUser())
            dispatch(deleteToken())
            dispatch(setLoading(false))
        }
    }
}