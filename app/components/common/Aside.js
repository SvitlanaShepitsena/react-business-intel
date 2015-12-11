import React from 'react';
import Radium from 'radium';
import color from 'tinycolor2';
import {Link} from 'react-router';

import Nav from './Nav';
import Logo from './Logo';

import connectToStores from 'alt/utils/connectToStores';
import ArticleStore from '../stores/ArticleStore';

@connectToStores
@Radium
export default class Aside extends React.Component {
    constructor(props) {
        super(props);
    }

    static getStores() {
        return [ArticleStore];
    }

    static getPropsFromStores() {
        return ArticleStore.getState();
    }

    render() {

        var links = ['articles', 'about', 'contact', 'post', 'design'];
        return (
            <div style={[styles.base]}>
                <Logo/>
                <Nav links={links}/>
                <div>
                    {this.props.title}
                </div>
            </div>
        )
    }
};


var styles = {
    base: {
        backgroundColor: color('whitesmoke'),
        boxShadow: '0 1px 2px rgba(0,0,0,.3)',
        height: 'auto',
    },
};

