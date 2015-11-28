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
                        <span style={styles.colorPlaylist}>Youtube Playlist</span>
                        <h2 style={styles.pageHeaderStyles}>
                            ReactJs. Best Practices for Personal Webapps</h2>
                        <div>
                            <ul style={styles.ul}>
                                <li style={styles.li}><span style={styles.videoDate}>Nov 24, 2015</span></li>
                                <li style={styles.li}><span style={styles.videoTitle}>1. Why ReactJs </span></li>
                            </ul>
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
    ul: {
        decoration: 'none',
        margin: 0,
        marginBottom: 10,
        padding: 0
    },
    colorPlaylist: {
        fontSize: 20,
        color: '#C62828',
    },
    li: {
        display: 'inline',
    },
    videoDate: {
        fontSize: 16,
        color: "#797979",
        fontWeight: 400
    },
    videoTitle: {
        marginLeft: 20,
        fontSize: 22,
        color: "#555555",
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
