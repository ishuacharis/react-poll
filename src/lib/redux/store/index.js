import { createStore } from 'redux';
import reducers from '../reducers';
import enhancers  from '../enhancers'


export const store  = createStore(reducers,enhancers);