import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import NotFound from './containers/NotFound';


ReactDOM.render(<BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='*' component={NotFound} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
