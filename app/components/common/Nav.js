import React from 'react';
import {Link} from 'react-router';


export default class Nav extends React.Component {
    render() {
        let ulStyles = {
            listStyle: 'none',
            width: 100
        };

        let liStyles = {
            padding: 20
        };
        let linkStyles = {
            textDecoration: 'none'
        };

        return (
            <ul style={ulStyles}>
                {this.props.links.map((link, i)=> {

                    return (
                        <li style={liStyles} key={i}>
                            <Link to={link} style={linkStyles}>{link}</Link>
                        </li>
                    )
                })
                }
            </ul>
        )
    }
};


