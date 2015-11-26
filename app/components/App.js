import React from 'react';
import {Link} from 'react-router';
import Helmet from "react-helmet";
import Aside from "./common/Aside";
import Toolbar from "./common/Toolbar";


export default class App extends React.Component {
    render() {

        return (
            <div style={styles.mainContainerStyles}>
                <Helmet title="Welcome to Our App"/>
                <Aside style={styles.asideStyles}/>
                <div style={styles.mainContentStyles}>
                    {this.props.children}
                </div>
                <div style={styles.footerStyles}>
                    <Toolbar title="Footer content"/>
                </div>
            </div>
        )
    }
};
var styles = {
    mainContainerStyles: {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: 1240,
        minHeight: 1200
    },
    footerStyles: {
        position: 'absolute',
        minHeight: 90,
        minWidth: '100%',
        bottom: 0
    },
    asideStyles: {
        float: 'left',
        width: 250
    },
    mainContentStyles: {
        float: 'left',
        width: 980,
        marginLeft: 10,
        marginRight: 10
    },
};

