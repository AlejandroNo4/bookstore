import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBook } from './actions';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';

const store = createStore(rootReducer);

const random = () => Math.floor(Math.random() * (1000 - 1));

store.dispatch(createBook({ id: random(), title: 'Pachinko', category: 'Historical' }));

store.dispatch(createBook({ id: random(), title: 'Exit West', category: 'Scy-fy' }));

store.dispatch(createBook({ id: random(), title: 'All the Light We Cannot See', category: 'Historical' }));

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root'),
);
