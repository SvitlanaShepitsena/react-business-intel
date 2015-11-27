import React from 'react';
import Helmet from "react-helmet";
import Toolbar from '../common/Toolbar';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <Helmet title="Contact Us"/>
                <Toolbar title="Contact Component"/>
                <div>
                    Contact us form
                </div>
            </div>
        )
    }
};
