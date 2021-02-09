import { applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { includeHiToState } from './includeHiToState';
import { sayHiOnDispatch } from './sayHiOnDispatch';



const middleWares =  [thunkMiddleWare];
const enhancerReducers = [ sayHiOnDispatch, includeHiToState ]

const middlewareEnhancers  = applyMiddleware(...middleWares)
const enhancers = [middlewareEnhancers, ...enhancerReducers ]

const composedEnhancers = composeWithDevTools(...enhancers);

export default composedEnhancers;