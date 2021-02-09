import { createStore } from 'redux';
import reducers from '../reducers';
import enhancers  from '../enhancers'


export const configureStore = (preloadedState) => {

    const store  = createStore(reducers,preloadedState,enhancers);

    return store
}


//export const store  = createStore(reducers,enhancers, );