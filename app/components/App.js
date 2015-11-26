import React from 'react';
import {Link} from 'react-router';
import Helmet from "react-helmet";
import Aside from "./common/Aside";
import Toolbar from "./common/Toolbar";


export default class App extends React.Component {
    render() {
        let mainContainerStyles = {
            position: 'relative',
            minWidth: 1200,
            minHeight: 1200
        };
        let footerStyles = {
            position: 'absolute',
            minHeight: 90,
            minWidth: '100%',
            bottom: 0
        };
        return (
            <div style={mainContainerStyles}>
                <Helmet title="Welcome to Our App"/>
                <Aside/>
                {this.props.children}
                <div style={footerStyles}>
                    <Toolbar title="Footer content"/>
                </div>
            </div>
        )
    }
};

