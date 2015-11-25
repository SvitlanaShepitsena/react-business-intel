import React from 'react';
import {Link} from 'react-router';

import Nav from './Nav';
import Logo from './Logo';


export default class Header extends React.Component {
    render() {
        let rightNav = {
            'background-color': 'whitesmoke',
            float: 'left',
            width: 200
        };

        var links = ['about', 'contact'];
        return (
            <div style={rightNav}>
                <Logo/>
                <Nav links={links} style={{float:'right'}}/>
            </div>
        )
    }
};


