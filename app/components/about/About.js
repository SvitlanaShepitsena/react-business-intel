import React from 'react';
import Helmet from "react-helmet";
import Toolbar from '../common/Toolbar';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {location: this.props.location};
    }


    render() {
        return (
            <div>
                <Helmet title="About Our App"/>
                <Toolbar title="About Component"/>
            </div>
        )
    }
};
