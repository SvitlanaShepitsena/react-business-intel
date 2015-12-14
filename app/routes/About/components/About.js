import React from 'react';
import Helmet from "react-helmet";
import Toolbar from '../../../components/common/Toolbar';
import ArticleForm from '../../../components/article/ArticleForm.js';

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
                <div>
                </div>
                <div>
                </div>
                <ArticleForm/>
            </div>
        )
    }
};
