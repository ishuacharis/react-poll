import { DECREMENT, INCREMENT } from '../../actions/action_types/counter';
const initialState = {
    count: 0
}

const counter = (state = initialState, action) => {
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
