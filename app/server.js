import path from 'path';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import createLocation from 'history/lib/createLocation';
import Helmet from 'react-helmet';
import {RoutingContext, match} from 'react-router';
import routes from './routes';

const env = process.env;
const publicPath = path.resolve('../public');

let app = express();
app.set('trust proxy', 'loopback');
app.set('x-powered-by', false);
app.use(express.static(publicPath));
console.log(publicPath);

global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};
app.use((req,res,next)=>{
    var url = req.originalUrl;
    var lastPart = url.split('/').pop();
    if (lastPart.indexOf('.')>-1) {
        res.sendFile(lastPart, { root: path.join(__dirname, '../public') });
    } else{
        next();
    }
});

app.get('/',(req, res, next) => {


    let location = createLocation(req.originalUrl);
    var assetsPath = `${req.protocol}://${req.get('host')}/${env.npm_package_version}`;

    match({routes, location}, (error, redirectLocation, renderProps) => {
        if (redirectLocation) return res.redirect(redirectLocation.pathname);
        if (error) return next(error.message);
        if (renderProps == null) return next(error);

        let markup = renderToString(<RoutingContext {...renderProps}/>);
        let helmet = Helmet.rewind();
        let html = [
            `<!DOCTYPE html>`,
            `<html>`,
            `<head>`,
            `<title>${helmet.title}</title>`,
            helmet.meta,
            helmet.link,
            `<meta charset="utf-8"/>`,
            `<meta property="fb:app_id" content="662941980514705"/>`,
            `<link rel="icon" media="all" type="image/x-icon" href="/favicon.ico"/>`,
            `</head>`,
            `<body>`,
            /* server side element*/
            `<div id="app">${markup}</div>`,
            `</body>`,
            /* client side element*/
            `<script type="text/javascript" src="/app.js"></script>`,
            `</html>`
        ].join('\n');
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    });
});

export default app;
