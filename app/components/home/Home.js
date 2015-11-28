import React from 'react';
import _ from 'lodash';
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
                <Toolbar title="Web Application Startup Template with ReactJs" sv="toolbarStyles"/>
                <div style={styles.containerStyles}>
                    <br/>
                    <div style={styles.iframeContainer}>
                        <h2 style={styles.pageHeaderStyles}>ReactJs. Best Practices for Personal Webapps</h2>
                        <div>
                            <h3>1. Why ReactJs</h3>
                            <YouTube
                                id="1"
                                url={'https://youtu.be/xjX_-VjsUfU'}
                                opts={opts}
                                onPlay={this._onPlay}
                            />
                            <p style={styles.pStyles}>
                            </p>
                        </div>
                        <hr/>
                        <div>
                            <h3>2. React Initial Boilerplate</h3>
                            <YouTube
                                id="2"
                                url={'https://youtu.be/_iLgaqbVLA4'}
                                opts={opts}
                                onPlay={this._onPlay}
                            />
                            <p style={styles.pStyles}>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
;
var styles = {
    pageHeaderStyles: {
        color: '#393939',
        marginBottom: '10',
        fontWeight: 500
    },

    iframeContainer: {
        textAlign: 'left'
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
