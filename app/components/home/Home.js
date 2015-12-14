import React from 'react';

import Toolbar from '../common/Toolbar';
import ArticleList from '../article/ArticleList';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Toolbar title="Web Application Startup Template with ReactJs" sv="toolbarStyles"/>
                <div >
                    <br/>
                    <div >
                        <span style={styles.colorPlaylist}>Youtube Playlist</span>
                        <h2 style={styles.pageHeaderStyles}>
                            ReactJs. Best Practices for Personal Webapps!</h2>
                        <hr/>
                        <ArticleList/>
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
