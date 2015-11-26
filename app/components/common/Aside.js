import React from 'react';
import {Link} from 'react-router';

import Nav from './Nav';
import Logo from './Logo';


export default class Aside extends React.Component {
    render() {
        let rightNav = {
            backgroundColor: 'whitesmoke',
            float: 'left',
            boxShadow: '0 1px 2px rgba(0,0,0,.3)',
            width: 220,
            height: 'auto',
            minHeight: 1100
        };

        var links = ['home', 'about', 'contact'];
        return (
            <div style={rightNav}>
                <Logo/>
                <Nav links={links}/>
            </div>
        )
    }
};


