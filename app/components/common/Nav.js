import React from 'react';
import {Link} from 'react-router';

//import ReactRouter from 'react-router';
//let Link = ReactRouter.Link;

var Person = {
    name: 'John',
    age: 20
};
var name = Person.name;
var age = Person.age;

var {name,age}=Person;

import Radium from 'radium';

@Radium
export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul style={styles.ulStyles}>
                {this.props.links.map((link, i)=> {
                    return (
                        <li style={styles.liStyles} key={i}>
                            <Link to={`/${link}`} style={styles.linkStyles}>{link}</Link>
                        </li>
                    )
                })
                }
            </ul>
        )
    }
};

var styles = {
    ulStyles: {
        listStyle: 'none',
        paddingLeft: 4
    },

    liStyles: {
        padding: 20
    },
    linkStyles: {
        color: '#244762',
        textTransform: 'uppercase',
        fontSize: 14,
        textDecoration: 'none',
        ':active': {
            fontWeight: 'bold'
        }
    },

};
