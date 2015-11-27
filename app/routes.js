import React from 'react';
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'

import App from './components/App';
import About from './components/about/About';
import Contact from './components/contact/Contact';

import Home from "./components/home/Home";

export default (
    <Route component={App}>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
    </Route>
);
