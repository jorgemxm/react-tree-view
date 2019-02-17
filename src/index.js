import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import '@/polyfills';

import '@/assets/global.scss';
import App from '@/App';

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('app')
  );
};

render(App);

export default hot(module)(App)
