import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
//import App from './App';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { configureStore } from 'lib/redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const {store,persistor}  = configureStore(undefined);

console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
