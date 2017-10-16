import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './containers/App';
import NotFound from './containers/NotFound';

const Routes = (props) => (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='*' component={NotFound} />
    </Switch>
);

export default Routes;
