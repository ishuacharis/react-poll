import { TOKEN, USER, SET_TOKEN, SET_USER,  DELETE_TOKEN, DELETE_USER, LOADING } from "../../action_types/auth";

export const token = () => ({
    type: TOKEN
})

export const user  = () => ({
    type: USER
})

export const setToken  = (payload) => ({
    type: SET_TOKEN,
    value: payload
})

export const setUser = (payload) => ({
    type: SET_USER,
    value: payload
})

export const deleteToken = () => ({
    type: DELETE_TOKEN,
})

export const deleteUser = () => ({
    type: DELETE_USER,
})

export const setLoading = (payload) => ({
    type: LOADING,
    value: payload
})