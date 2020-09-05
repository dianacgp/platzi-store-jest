import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';

import initialState from './initialState';

//shallow es para probar algun en particular
//jest --updateSnapshot cuando hacemos un cambio en un comoponente toca correr esto para que actualixe lossnaptshop


const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
