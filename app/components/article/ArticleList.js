import React from 'react';

import Toolbar from '../common/Toolbar';
import YouTube from 'react-youtube';
import Article from './Article';

import connectToStores from 'alt/utils/connectToStores';
import ArticleStore from '../stores/ArticleStore';

@connectToStores
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
            <div>
                {Object.keys(this.props.articles).map((key)=> {
                    let article = this.props.articles[key];
                    console.log(article.key);

                    return (
                        <Article key={key} fbArticle={article}/>
                    );
                })}
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
