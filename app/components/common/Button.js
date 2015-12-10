import React from 'react';
import Radium from 'radium';
/*Styles*/
import colors from '../../settings/colors.js';

@Radium
export default class Button extends React.Component {
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
                    style={[styles.default, styles[this.props.size], styles[this.props.type],styles[this.props.kind]]}>
                    {this.props.children}
                </button>
            </div>
        )
    }

}
var styles = {
    iconBase: {
        verticalAlign: "middle",
        display: 'inline-block'
    },
    default: {
        background: colors.grey100,
        color: colors.grey800
    },
    fab: {
        fontSize: '22px',
        padding: 6,
        margin: 8,
        lineHeight: '56px',
        boxShadow: 'rgba(0, 0, 0, 0.258824) 0px 2px 5px 0px',
        width: 56,
        height: 56,
        display: 'block',
        borderRadius: '50% '
    },
    warning: {
        background: colors.red500,
        color: colors.red50
    },
    xl: {
        minWidth: 200
    },

};

