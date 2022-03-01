import React from 'react';
import ComA from './ComA';
import ComB from './ComB';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
const App = () => {
  // console.log(store.getState());
  return (
    <>
      <Provider store={store}>
        <ComA propshobby='coding' />
        <ComB />
      </Provider>
    </>
  );
};

export default App;
