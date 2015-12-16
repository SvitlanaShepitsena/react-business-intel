import React from 'react';
import {Redirect,Route,IndexRoute} from 'react-router'
import { render } from 'react-dom'

/*Components*/
import App from './components/App';
import Articles from './components/article/Articles.js';
import ArticleList from './components/article/ArticleList';
import Article from './components/article/Article';
import ArticleForm from './components/article/ArticleForm.js';
import Contact from './components/contact/Contact';
import DesignTemplate from './components/design/DesignTemplate';
import Home from "./components/home/Home";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about-our-project" getComponent={
        (location,cb)=>require('./routes/About')(location,cb)
        }/>
        <Route path="articles" component={Articles}>
            <Route path="/articles/:id" component={Article}/>
        </Route>
        <Route path="add-an-article" component={ArticleForm}/>
        <Route path="buttons-design" component={DesignTemplate}/>
        <Route path="radium-keyframes" component={Contact}/>
        <Redirect from='/*' to="/"/>
    </Route>
);
