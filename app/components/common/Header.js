import React from 'react';
import {Link} from 'react-router';

import Nav from './Nav';
import Logo from './Logo';


export default class Header extends React.Component {
    render() {
        var links=['about','contact'];
        return (
            <div>
                <Logo style={{float:'left',width:'50px'}}  />
                <Nav links={links} style={{float:'right'}}/>
            </div>
        )
    }
};


