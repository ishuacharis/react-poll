import { DECREMENT, INCREMENT } from '../../actions/action_types/counter';

import { counterInitialState } from '../../states/counter'

const counter = (state = counterInitialState, action) => {
    switch(action.type){
        case INCREMENT:
            return { ...state, count: state.count + action.value };
        case DECREMENT:
            return { ...state, count: state.count - action.value };
        default:
            return state;
    }
}

export default counter;
