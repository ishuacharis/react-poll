import { INCREMENT } from '../action_types/counter';


export const increment = (value) => {
    return {
        type: INCREMENT,
        value: value
    }
};