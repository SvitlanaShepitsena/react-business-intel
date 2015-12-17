import React from 'react';
import Radium from 'radium';
import Helmet from "react-helmet";
import YouTube from 'react-youtube';
/*Stores*/
import connectToStores from 'alt/utils/connectToStores';
import ArticleStore from '../stores/ArticleStore';
/*Sections*/
import Toolbar from '../common/Toolbar';
import Article from './Article';

@connectToStores
@Radium
export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }

    static getStores() {
        return [ArticleStore];
    }

    static getPropsFromStores() {
        return ArticleStore.getState();
    }

    componentDidMount() {
        ArticleStore.getArticles();
    }

    render() {
        return (
            <div id="ArticleList">
                <Radium.Style
                    scopeSelector="#ArticleList"
                    rules={{
                     ul:{listStyleType:'none',margin:0},
                     li:{display:'inline-block'}
                    }}/>
                <Helmet title="Our Tutorials"/>
                <ul>
                    {Object.keys(this.props.articles).map((key)=> {
                        let article = this.props.articles[key];
                        return <Article key={key} fbArticle={article}/>

                    })}
                </ul>
            </div>
        )
    }
};
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
