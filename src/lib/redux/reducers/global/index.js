import { globalInitialState } from "lib/redux/states/global";
import { LOADING, ERROR } from "../../actions/action_types/global";

export const global = (state = globalInitialState, { type, value }) => {

    switch (type) {
        case LOADING:
            
            return { ...state, loading: value  };

        case ERROR:
            return { ...state, error: value };
    
        default:
            return state;
    }
}

export default global;