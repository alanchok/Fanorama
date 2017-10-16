import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './containers/Home';
import OurProduct from './containers/OurProduct';
import NotFound from './containers/NotFound';

ReactDOM.render(<BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/our-product' component={OurProduct} />
            <Route path='*' component={NotFound} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
