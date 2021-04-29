import { setError, setLoading } from "../global";
import { setEvictionList } from "./index";


export const getEviction = (details, cb) => {
    
    return async function getHousemateEviction(dispatch, getState) {
        dispatch(setLoading(true))
        try {
            const {response} = await cb(details);
            const {data} = response;
           
            dispatch(setEvictionList(data));
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setError(error));
            dispatch(setLoading(false));
        }
    }
}