import React from 'react';
import Radium from 'radium';

import Helmet from "react-helmet";
import Toolbar from '../common/Toolbar';

import YouTube from 'react-youtube';
import Article from './Article';

import connectToStores from 'alt/utils/connectToStores';
import ArticleStore from '../stores/ArticleStore';

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
