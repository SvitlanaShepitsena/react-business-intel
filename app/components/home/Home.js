import React from 'react';
/*Components*/
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
                        <ArticleList/>
                    </div>
                </div>
            </div>
        )
    }
} ;
