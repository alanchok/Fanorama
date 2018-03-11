import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './containers/Home';
import OurProduct from './containers/OurProduct';
import ContactUs from './containers/ContactUs';
import NotFound from './containers/NotFound';
import PrivacyPolicy from './containers/PrivacyPolicy';

ReactDOM.render(<BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/our-product' component={OurProduct} />
            <Route exact path='/contact-us' component={ContactUs} />
            <Route exact path='/contact-us/:action' component={ContactUs} />
            <Route exact path='/privacy-policy' component={PrivacyPolicy} />
            <Route path='*' component={NotFound} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
