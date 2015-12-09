import React from 'react';
import './styles/app.css';
import ReactDom from 'react-dom';
import Router from 'react-router';
import {createHistory} from 'history';
import routes from './routes';

import Iso from 'iso';
import altInstance from './components/alt';

/*createHistory component allows to emulate routing with html5 (without #)  */
let history = createHistory();

Iso.bootstrap((state, _, container) => {
    var elem=document.getElementById('app');
    altInstance.bootstrap(state);
    ReactDom.render(<Router history={history} children={routes} />, elem);
});
