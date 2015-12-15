import React from 'react';
import Helmet from "react-helmet";
import Toolbar from '../../../components/common/Toolbar';
import ArticleForm from '../../../components/article/ArticleForm.js';

import Guid from 'guid'

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
                {Guid.raw()}
                <div>
                </div>
                <ArticleForm/>
            </div>
        )
    }
};
