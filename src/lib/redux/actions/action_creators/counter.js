import { INCREMENT , DECREMENT} from '../action_types/counter';


export const increment = (value) => {
    return {
        type: INCREMENT,
        value: value || 1
    }
};
export const decrement = (value) => ({
        type: DECREMENT,
        value: value || 1
});