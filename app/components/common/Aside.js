import React from 'react';
import Radium from 'radium';
import color from 'tinycolor2';
import {Link} from 'react-router';

import Nav from './Nav';
import Logo from './Logo';

@Radium
export default class Aside extends React.Component {
    render() {

        var links = ['abouts', 'contact'];
        return (
            <div style={[styles.base]}>
                <Logo/>
                <Nav links={links}/>
            </div>
        )
    }
};


var styles = {
    base: {
        backgroundColor: color('whitesmoke'),
        boxShadow: '0 1px 2px rgba(0,0,0,.3)',
        width: 220,
        height: 'auto',
        minHeight: 1100
    },

};

