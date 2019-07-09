import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
serviceWorker.register();
