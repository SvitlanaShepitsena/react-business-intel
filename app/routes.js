import React from 'react';
import {Redirect,Route,IndexRoute} from 'react-router'
import { render } from 'react-dom'

import App from './components/App';
import About from './components/about/About';
import ArticleForm from './components/article/ArticleForm.js';
import Contact from './components/contact/Contact';
import ArticleList from './components/article/ArticleList';
import Article from './components/article/Article';
import Home from "./components/home/Home";

export default (
    <Route path="/" component={App}>
        {/* allows you to have Home be a first class route component with IndexRoute*/}
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="contact" component={Contact}/>
        <Route path="post" component={ArticleForm}/>
        <Route path="articles" component={ArticleList}>
            <Route path="/articles/:id" component={Article}/>
        </Route>
        <Redirect from='/*' to="/"/>
    </Route>
);
