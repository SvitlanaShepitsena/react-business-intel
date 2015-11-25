import React from 'react';
import {Link} from 'react-router';


export default class Logo extends React.Component {
    render() {
        let logoContainer = {
            paddingTop: 8,
            width: 'inherit'
        };
        let logoStyles = {
            display: 'block',
            width: 100,
            margin: '0px auto'
        };
        return (
            <div style={logoContainer}>
                <Link to="/" style={logoContainer}>
                    <img style={logoStyles} src="https://s3-us-west-2.amazonaws.com/chicagoview/icons/logo-camera.png"/>
                </Link>
            </div>
        )
    }
};


