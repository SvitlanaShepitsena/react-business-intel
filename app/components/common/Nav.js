import React from 'react';
import {Link} from 'react-router';


export default class Nav extends React.Component {
    render() {
        var ulStyles = {
            listStyle: 'none',
            width:100
        }
        var liStyles = {
            display : 'inline',
            padding:20
        }

        return (
            <ul style={ulStyles}>
                {this.props.links.map((link, i)=> {

                    return (
                        <li style={liStyles} key={i}>
                            <Link to={link} style={{textDecoration:'none'}}>{link}</Link>
                        </li>
                    )
                })
                }
            </ul>
        )
    }
};


