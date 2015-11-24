import React from 'react';
import {Link} from 'react-router';
import Helmet from "react-helmet";
import Header from "./common/Header";


         export default class App extends React.Component{
             render() {
                 return (
                <div>
                <Helmet title="Welcome to CBI"/>
                <Header/>
                {this.props.children}
            </div>
        )
    }
};

