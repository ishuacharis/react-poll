import { createStore } from 'redux';
import persistedReducer from '../reducers';
import enhancers  from '../enhancers'
import {persistStore,  } from 'redux-persist';


export const configureStore = (preloadedState) => {

    const store  = createStore(persistedReducer,preloadedState,enhancers);
    let persistor = persistStore(store);
    return {store, persistor};
}


//export const store  = createStore(reducers,enhancers, );