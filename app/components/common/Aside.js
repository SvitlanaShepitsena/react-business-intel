import React from 'react';
import Radium from 'radium';
import color from 'tinycolor2';
import {Link} from 'react-router';

/*Components*/
import Nav from './Nav';
import Logo from './Logo';
/*Stores*/
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
        var links = ['about our project', 'articles', 'add an article', 'buttons design', 'radium keyframes'];
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

