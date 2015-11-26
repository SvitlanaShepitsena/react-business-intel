import React from 'react';
import Helmet from "react-helmet";
import Toolbar from '../common/Toolbar';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Helmet title="About Our App"/>
                <Toolbar title="About Component"/>
            </div>
        )
    }
};
