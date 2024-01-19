import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import ReduxProvider from './configureRedux';
import reportWebVitals from './reportWebVitals';

import MainFrame from './Routes/MainFrame';
import LoginPage from './Routes/Login';

import { ROUTES } from './Routes.constants';
import { CommonUtils } from './utils/commonUtils';


function render(View) {
  return CommonUtils.isLoggedIn() ?
    <Redirect to="/" /> :
    View;
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <ReduxProvider>
      <Router>
        <Switch>
          <Route path={ROUTES.LOGIN} render={(props) => render(<LoginPage {...props} />)} />
          <Route path={ROUTES.INDEX} component={MainFrame} />
          <Redirect from='*' to={ROUTES.INDEX} />
        </Switch>
      </Router>
    </ReduxProvider>
  
);


reportWebVitals();
