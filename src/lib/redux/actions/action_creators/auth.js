import { TOKEN, USER, SET_TOKEN, SET_USER } from "../action_types/auth";

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