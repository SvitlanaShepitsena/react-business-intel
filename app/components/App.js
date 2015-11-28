import React from 'react';
import {Link} from 'react-router';
import Helmet from "react-helmet";
import Aside from "./common/Aside";
import Toolbar from "./common/Toolbar";


export default class App extends React.Component {
    render() {
        let content = "ReactJs. Best Practices for Personal Webapps"
        return (
            <div style={styles.mainContainerStyles}>
                <Helmet
                    title="Web Application Startup Template with ReactJs"
                    meta={[
                    {"name": "description", "content": "Helmet application"},
                    {"property": "og:title", "content": content},
                    {"property": "og:video", "content": "https://www.youtube.com/watch?v=7klNQyyLpiA"},
                    {"property": "og:description", "content": "Web app template in details"},
                ]}
                />
                <div style={styles.asideStyles}>
                    <Aside/>
                </div>
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
        color: '#393939',
        fontWeight: 500,
        fontFamily: "Segoe UI, Arial,sans-serif",
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: 1240,
        minHeight: 1220
    },
    footerStyles: {
        position: 'absolute',
        minHeight: 90,
        minWidth: '100%',
        bottom: 0
    },
    asideStyles: {
        float: 'left'
    },
    mainContentStyles: {
        float: 'left',
        width: 980,
        marginLeft: 10,
        marginRight: 10
    },
};

