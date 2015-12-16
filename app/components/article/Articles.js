import React from 'react';
import Helmet from "react-helmet";
/*Components*/
import Toolbar from '../common/Toolbar';
import ArticleList from './ArticleList';

export default class Articles extends React.Component {
    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet title="Our Tutorials"/>
                <Toolbar title="Articles Component"/>
                <ArticleList/>
            </div>
        )
    }

}