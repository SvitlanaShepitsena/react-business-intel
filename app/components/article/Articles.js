import React from 'react';
import Helmet from "react-helmet";
/*Components*/
import Toolbar from '../common/Toolbar';
import ArticleList from './ArticleList';

export default class Articles extends React.Component {
    // Constructor

    constructor(props) {
        super(props);
        this.state = {
            location: this.props.location
        };
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
    }

    render() {
        let title = "ReactJs. Best Practices for Personal Webapps";
        let description = "This project is an implementation of react isomorphic (universal) webapp. It allows to create your react app ones and render it on server and client by using flux store (alt implementation of flux). The project also implements 'lazy' (async) loading of react components via require.ensure and Webpack. It really works with ES6 modules. For layout we used just skeleton and manage inline styles with Radium. Imho, it is a good starter point for a small personal website. Hope our tutorials and project was useful for learning react workflow";
        let youTubeId = 'xjX_-VjsUfU';
        let url = `http://www.chicagowebapp.com${this.state.location.pathname}`;
        let video = `http://youtu.be/${youTubeId}`;
        let image = `http://img.youtube.com/vi/${youTubeId}/hqdefault.jpg`;
        return (
            <div>
                <Helmet
                    title="Web Application Startup Template with ReactJs"
                    meta={[
                    {"property": "og:title", "content": title},
                    {"property": "og:url", "content": url},
                    {"property": "og:video", "content": video},
                    {"property": "og:description", "content": description},
                    {"property": "og:image", "content": image},
                ]}
                />
                <Toolbar title="Articles Component"/>

                <ArticleList/>
            </div>
        )
    }

}