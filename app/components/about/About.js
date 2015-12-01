import React from 'react';
import Helmet from "react-helmet";
import Toolbar from '../common/Toolbar';
import ArticleForm from '../common/ArticleForm';

export default class About extends React.Component {
    /* Run extended class constructor. Required in ES6*/
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet title="About Our App"/>
                <Toolbar title="About Component"/>
                <ArticleForm/>
            </div>
        )
    }
};
