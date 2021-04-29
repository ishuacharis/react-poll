import { SET_EVICTION_LIST } from "../../action_types/housemate";

export const setEvictionList = (payload) => ({
    type: SET_EVICTION_LIST,
    value: payload
});