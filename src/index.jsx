import React from 'react';
import { render } from 'react-dom';

import { RootContext } from 'utils/contexts';

import WaffleApp from 'app';

const waffleRoot = document.createElement('div');
waffleRoot.setAttribute('id', 'waffle-root');
document.body.append(waffleRoot);

const App = (
  <RootContext.Provider value={waffleRoot}>
    <WaffleApp />
  </RootContext.Provider>
);

render(App, waffleRoot);
