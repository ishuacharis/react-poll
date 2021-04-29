import { handleLogOut } from "lib/routes"
import { deleteToken, deleteUser, setLoading, setToken, setUser } from "./index";
import {  setError } from "../global/index";


export const authenticate  = (details, cb) => {
     
    return async function login (dispatch, getState){
        try {
            const { response: { user, token, message } }  = await cb(details)
            dispatch(setUser(user))
            dispatch(setToken(token))
        } catch (error) {
            
            dispatch(setError(error))
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