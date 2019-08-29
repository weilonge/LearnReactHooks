import React from 'react';
import { render } from 'react-dom';
import { StoreContext } from 'redux-react-hook';

import store from './store';
import Page from './Page';

const App = () => (
  <StoreContext.Provider value={store}>
    <Page />
  </StoreContext.Provider>
);

render(<App />, document.getElementById('root'));
