import React from 'react';
import _ from 'lodash';
import Helmet from "react-helmet";
import Toolbar from '../common/Toolbar';
import YouTube from 'react-youtube';

export default class Home extends React.Component {

    render() {
        const opts = {
            height: '490',
            width: '740',

            playerVars: {
                autoplay: 0
            }
        };

        return (
            <div>
                <Helmet title="Web Application Startup Template with ReactJs"
                        meta={[ {"name": "og:title", "content": "Web Application Startup Template with ReactJs"},
                         {"name": "og:description", "content": "ReactJs. Best Practices for Personal Webapps"},
                         {"name": "og:video", "content": "https://youtu.be/xjX_-VjsUfU?list=PLPgDBCA1Cb3Ngjpo21aFkdqVT2H0fZu3W"}
                          ]}/>
                <Toolbar title="Web Application Startup Template with ReactJs" sv="toolbarStyles"/>
                <div style={styles.containerStyles}>
                    <br/>
                    <div style={styles.iframeContainer}>
                        <h2 style={styles.pageHeaderStyles}>ReactJs. Best Practices for Personal Webapps</h2>
                        <br/>
                        <YouTube
                            id="1"
                            url={'https://www.youtube.com/watch?v=7klNQyyLpiA'}
                            opts={opts}
                            onPlay={this._onPlay}
                        />
                        <h3>1. Why ReactJs</h3>
                        <p style={styles.pStyles}>
                        </p>
                    </div>


                </div>
            </div>
        )
    }
}
;
var styles = {
    pageHeaderStyles: {
        color: '#244762',
        fontSize: 22
    },

    iframeContainer: {
        textAlign: 'center'
    },
    containerStyles: {
        padding: 10,
        backgroundColor: 'whitesmoke',
        display: 'block',
        height: 'auto'
    },
    pStyles: {
        display: 'block',
        fontSize: 14,
        lineHeight: 2,
        paddingLeft: 20
    },
};
