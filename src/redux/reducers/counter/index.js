import { INCREMENT } from '../../actions/action_types/counter';
const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return { ...state, counter: state.counter + action.value };
        default:
            return state;
    }
}

export default counter;
