import { ERROR, LOADING } from "../../action_types/global";


export const setLoading = (payload) => ({
   type: LOADING,
   value: payload

});

export const setError = (payload) => ({
   type: ERROR,
   value: payload

});