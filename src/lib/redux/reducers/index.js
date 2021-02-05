import {  combineReducers  } from 'redux';

import counter from './counter/index'
import auth from './auth/index'

const reducers = combineReducers({counter, auth})

export default reducers;