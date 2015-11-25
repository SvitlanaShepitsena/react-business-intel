import React from 'react';
import {Link} from 'react-router';
import Helmet from "react-helmet";
import Aside from "./common/Aside";


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Helmet title="Welcome to Our App"/>
                <Aside/>
                {this.props.children}
            </div>
        )
    }
};

