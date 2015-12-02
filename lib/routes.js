'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactDom = require('react-dom');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsAboutAbout = require('./components/about/About');

var _componentsAboutAbout2 = _interopRequireDefault(_componentsAboutAbout);

var _componentsCommonArticleForm = require('./components/common/ArticleForm');

var _componentsCommonArticleForm2 = _interopRequireDefault(_componentsCommonArticleForm);

var _componentsContactContact = require('./components/contact/Contact');

var _componentsContactContact2 = _interopRequireDefault(_componentsContactContact);

var _componentsArticleArticleList = require('./components/article/ArticleList');

var _componentsArticleArticleList2 = _interopRequireDefault(_componentsArticleArticleList);

var _componentsArticleArticle = require('./components/article/Article');

var _componentsArticleArticle2 = _interopRequireDefault(_componentsArticleArticle);

var _componentsHomeHome = require("./components/home/Home");

var _componentsHomeHome2 = _interopRequireDefault(_componentsHomeHome);

exports['default'] = _react2['default'].createElement(
    _reactRouter.Route,
    { path: '/', component: _componentsApp2['default'] },
    _react2['default'].createElement(_reactRouter.IndexRoute, { component: _componentsHomeHome2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: 'about', component: _componentsAboutAbout2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: 'contact', component: _componentsContactContact2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: 'post', component: _componentsCommonArticleForm2['default'] }),
    _react2['default'].createElement(
        _reactRouter.Route,
        { path: 'articles', component: _componentsArticleArticleList2['default'] },
        _react2['default'].createElement(_reactRouter.Route, { path: '/articles/:id', component: _componentsArticleArticle2['default'] })
    ),
    _react2['default'].createElement(_reactRouter.Redirect, { from: '/*', to: '/' })
);
module.exports = exports['default'];
/* allows you to have Home be a first class route component with IndexRoute*/