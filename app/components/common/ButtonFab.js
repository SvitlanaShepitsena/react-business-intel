import React from 'react';
import Radium from 'radium';
/*Styles*/
import colors from '../../settings/colors.js';

@Radium
export default class ButtonFab extends React.Component {
    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    /*Requiring parameters(optional.)*/
    //static propTypes = {
    //    kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
    //};

    render() {
        return (
            <div>
                <button
                    style={[styles.default, styles[this.props.size], styles[this.props.kind]]}>
                    {this.props.children}
                </button>
            </div>
        )
    }

}
var styles = {
    default: {
        position: 'relative',
        display: 'block',
        padding: 2,
        margin: 8,
        boxShadow: 'rgba(0, 0, 0, 0.258824) 0px 2px 5px 0px',
        borderRadius: '50% ',
        background: colors.grey100,
        color: colors.grey800,
    },
    primary: {
        background: colors.blue500,
        color: colors.blue50
    },
    success: {
        background: colors.green500,
        color: colors.green50
    },
    warning: {
        background: colors.orange500,
        color: colors.orange50
    },
    danger: {
        background: colors.red500,
        color: colors.red50
    },
    xl: {
        width: 56,
        height: 56,
        lineHeight: 1.5,
        fontSize: 20

    },
    lg: {
        width: 40,
        height: 40,
        lineHeight: 1.3,
        fontSize: 18
    },
    md: {
        width: 36,
        height: 36,
        lineHeight: 1,
        fontSize: 16
    },
    sm: {
        width: 30,
        fontSize: 15,
        lineHeight: .8,
        height: 30
    },
    xs: {
        width: 26,
        fontSize: 13,
        lineHeight: .6,
        height: 26
    },

};

