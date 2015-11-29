import React from 'react';
import ReactDom from 'react-dom';
import Router from 'react-router';
import {createHistory} from 'history';
import routes from './routes';

/*createHistory component allows to emulate routing with html5 (without #)  */
let history = createHistory();
/*start react app with ReactDom.render*/
ReactDom.render(<Router history={history}>{routes}</Router>, document.getElementById('app'))
