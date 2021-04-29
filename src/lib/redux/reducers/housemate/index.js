import { SET_EVICTION_LIST } from "../../actions/action_types/housemate";

import { housemateInitialState } from "../../states/housemate";

const  housemate = (state = housemateInitialState, action) => {

    switch (action.type) {
        case SET_EVICTION_LIST:
            return { ...state, housemates: action.value}
    
        default:
            return { ...state };
    }
}

export default housemate;