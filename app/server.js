import path from 'path';
import express from 'express';
import React from 'react';
import createLocation from 'history/lib/createLocation';
import Helmet from 'react-helmet';
import {RoutingContext, match} from 'react-router';
import {renderToString} from 'react-dom/server';
import routes from './routes';

import Iso from 'iso';
import altInstance from './components/alt';
import Firebase from 'firebase';

// Getting


const env = process.env;
var baseUrl = (env.USER && env.USER.indexOf('root') > -1) ? 'http://chicagowebapp.com/' : `${env.npm_package_config_appWebpackBaseUrl}`;

const assetsPath = `${baseUrl}/${env.npm_package_version}`;
const publicPath = path.resolve('../public');

let app = express();
app.set('trust proxy', 'loopback');
app.set('x-powered-by', false);
app.use(express.static(publicPath));
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};
app.use((req, res, next)=> {

    var url = req.originalUrl;
    var lastPart = url.split('/').pop();
    if (lastPart.indexOf('.') > -1) {
        res.sendFile(lastPart, {root: path.join(__dirname, `../public/assets/${env.npm_package_version}/`)});
    } else {
        next();
    }
});

app.use((req, res, next)=> {

    var url = req.originalUrl;
    var store = {
        ArticleStore: {
            articles: [],
            articlesLoading: true
        }
    };

    if (url === '/') {
        let fbRef = new Firebase('https://chicagowepapp.firebaseio.com/articles');
        fbRef.once('value', (data)=> {
            var articles = data.val();
            store.ArticleStore.articles = articles;
            store.ArticleStore.articlesLoading = false;
            res.locals.data = JSON.stringify(store);
            next()

        });

    } else {

        res.locals.data = JSON.stringify(store);
        next();
    }


});


app.get('/*', (req, res, next) => {
    let location = createLocation(req.originalUrl);
    match({routes, location}, (error, redirectLocation, renderProps) => {
        if (redirectLocation) return res.redirect(redirectLocation.pathname);
        if (error) return next(error.message);
        if (renderProps == null) return next(error);

        altInstance.bootstrap(res.locals.data);
        /*method, that renders app.js component to string for server side*/
        let markup = Iso.render(renderToString(<RoutingContext {...renderProps}/>), altInstance.flush());
        /*Helmet -  reusable React component that will manage all of your changes to the document head with support for document title, meta, link, script, and base tags.^/ */
        let helmet = Helmet.rewind();
        /*syntax ES6*/
        let html = [
            `<!DOCTYPE html>`,
            `<html>`,
            `<head>`,
            `<title>${helmet.title}</title>`,
            helmet.meta,
            helmet.link,
            `<meta charset="utf-8"/>`,
            `<link rel="stylesheet" href="${assetsPath}/app.css"/>`,
            `</head>`,
            `<body>`,

            /* server side element*/
            `<div id="app" class="app">${markup}</div>`,
            `</body>`,
            /* client side element*/
            `<script type="text/javascript" charset="utf-8" src="${assetsPath}/app.js"></script>`,
            `</html>`
        ].join('\n');
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    });
});

export default app;
