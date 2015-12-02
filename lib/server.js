'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _historyLibCreateLocation = require('history/lib/createLocation');

var _historyLibCreateLocation2 = _interopRequireDefault(_historyLibCreateLocation);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = require('react-router');

var _reactDomServer = require('react-dom/server');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var env = process.env;
var baseUrl = env.USER && env.USER.indexOf('root') > -1 ? 'http://chicagowebapp.com/' : '' + env.npm_package_config_appWebpackBaseUrl;

var assetsPath = baseUrl + '/' + env.npm_package_version;
var publicPath = _path2['default'].resolve('../public');

var app = (0, _express2['default'])();
app.set('trust proxy', 'loopback');
app.set('x-powered-by', false);
app.use(_express2['default']['static'](publicPath));

global.navigator = { userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36' };
app.use(function (req, res, next) {

    var url = req.originalUrl;
    console.log(url);
    var lastPart = url.split('/').pop();
    if (lastPart.indexOf('.') > -1) {
        res.sendFile(lastPart, { root: _path2['default'].join(__dirname, '../public/assets/' + env.npm_package_version + '/') });
    } else {
        next();
    }
});

app.get('/*', function (req, res, next) {
    var location = (0, _historyLibCreateLocation2['default'])(req.originalUrl);
    (0, _reactRouter.match)({ routes: _routes2['default'], location: location }, function (error, redirectLocation, renderProps) {
        if (redirectLocation) return res.redirect(redirectLocation.pathname);
        if (error) return next(error.message);
        if (renderProps == null) return next(error);
        /*method, that renders app.js component to string for server side*/
        var markup = (0, _reactDomServer.renderToStaticMarkup)(_react2['default'].createElement(_reactRouter.RoutingContext, renderProps));

        /*Helmet -  reusable React component that will manage all of your changes to the document head with support for document title, meta, link, script, and base tags.^/ */
        var helmet = _reactHelmet2['default'].rewind();
        /*syntax ES6*/
        var html = ['<!DOCTYPE html>', '<html>', '<head>', '<title>' + helmet.title + '</title>', helmet.meta, helmet.link, '<meta charset="utf-8"/>', '<link rel="icon" media="all" type="image/x-icon" href="/favicon.ico"/>', '</head>', '<body>',

        /* server side element*/
        '<div id="app">' + markup + '</div>', '</body>',
        /* client side element*/
        '<script type="text/javascript" src="' + assetsPath + '/app.js"></script>', '</html>'].join('\n');
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    });
});

exports['default'] = app;
module.exports = exports['default'];