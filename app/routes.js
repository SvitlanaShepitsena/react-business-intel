import React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import Main  from './components/home/Main';
import About from './components/about/About';
import Contact from './components/contact/Contact';

export default (
    <Route path="/" component={App}>
        <Route path="/home" component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
    </Route>
);
