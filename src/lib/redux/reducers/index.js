import {  combineReducers  } from 'redux';
import { persistReducer  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import global from './global/index';
import counter from './counter/index';
import auth from './auth/index';
import housemate from './housemate/index';

const persistConfig = {
    key: 'root',
    storage
};

const reducers = combineReducers({global, counter, auth,housemate})
const persistedReducer =  persistReducer(persistConfig,reducers);


export default persistedReducer;