import React from 'react';
import {Link} from 'react-router';


export default class Logo extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">
                <img src="http://cdn2.iconfinder.com/data/icons/social-18/512/Instagram-128.png"/>
                    </Link>
            </div>
        )
    }
};


