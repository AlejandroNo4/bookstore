import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBook, deleteBook } from './actions';
import bookReducer from './reducers/books';
import App from './components/App';
import './index.css';

const store = createStore(bookReducer);

store.dispatch(createBook({ id: 1, title: 'A book', category: 'Romance' }));

store.dispatch(createBook({ id: 2, title: 'Las montañas sirol', category: 'Comedy' }));

store.dispatch(createBook({ id: 3, title: 'El resplandore', category: 'Category' }));

store.dispatch(deleteBook({ id: 1 }));

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root'),
);
