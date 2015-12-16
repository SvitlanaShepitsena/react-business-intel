import React from 'react';

import ReactDom from 'react-dom';
import {createHistory} from 'history';
import Iso from 'iso';
/*Routes*/
import Router from 'react-router';
import routes from './routes';
/*Components*/
import altInstance from './components/alt';
/*Styles*/
import './styles/app.css';

/*createHistory component allows to emulate routing with html5 (without #)  */
let history = createHistory();

Iso.bootstrap((state, _, container) => {
    var elem = document.getElementById('app');
    altInstance.bootstrap(state);
    ReactDom.render(<Router history={history} children={routes}/>, elem);
});
