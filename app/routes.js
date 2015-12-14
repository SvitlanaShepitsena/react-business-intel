import React from 'react';
import {Redirect,Route,IndexRoute} from 'react-router'
import { render } from 'react-dom'

import App from './components/App';
import About from './components/about/About';

import ArticleForm from './components/article/ArticleForm.js';
import Contact from './components/contact/Contact';
import ArticleList from './components/article/ArticleList';
import Article from './components/article/Article';
import DesignTemplate from './components/design/DesignTemplate';
import Home from "./components/home/Home";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" getComponent={

        (location,cb)=>{require('./routes/About')(location,cb)}

        }/>
        <Route path="contact" component={Contact}/>
        <Route path="post" component={ArticleForm}/>
        <Route path="design" component={DesignTemplate}/>
        <Route path="articles" component={ArticleList}>
            <Route path="/articles/:id" component={Article}/>
        </Route>
        <Redirect from='/*' to="/"/>
    </Route>
);
