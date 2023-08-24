import React from 'react';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Loading from './components/isLoading';

import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Loading />
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
