import React from 'react';
import {Link} from 'react-router';


export default class Logo extends React.Component {
    render() {
        return (
            <div style={styles.logoWrapper}>
                <Link to="/">
                    <img style={styles.base} src="https://s3-us-west-2.amazonaws.com/chicagoview/icons/react-logo.png"/>
                </Link>
            </div>
        )
    }
};


var styles = {
    base: {
        display: 'block',
        width: 100,
        margin: '0px auto'
    },
    logoWrapper: {
        paddingTop: 8,
        width: 'inherit'
    },
};

