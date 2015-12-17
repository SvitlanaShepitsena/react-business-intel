import React from 'react';
import Radium from 'radium';
/*Styles*/
import colors from '../../settings/colors.js';
import elements from '../../settings/elements.js';

@Radium
export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={[styles.wrapper]}>
                <button key="articleBtn"
                        style={[styles.base,
                        styles[this.props.type],
                        styles[this.props.size],
                        styles[this.props.kind] ]}>
                    {this.props.children}
                </button>
                {Radium.getState(this.state, 'articleBtn', ':hover') ? (
                    <span style={[styles.tip, this.props.tip && styles.tipBase]}>
                        {this.props.tip || "Give me some tip!"}
                </span>
                ) : null}
            </div>
        )
    }

}
var styles = {
    wrapper: {
        position: 'relative',
        //background: colors.purple200,
        width: 'auto',
        height: 'auto'
    },
    tipBase: {
        //padding: '4px 6px',
    },
    tip: {
        padding: '4px 6px',
        position: 'absolute',
        fontSize: 12,
        background: colors.grey700,
        color: colors.grey50,
        width: 'auto',
        height: 'auto',
        top: -30,
        left: 0
    },
    base: {
        ':hover': {
            boxShadow: elements.shadowBtnHover,
        }
    },
    default: {
        background: colors.grey500,
        color: colors.grey50,
        boxShadow: elements.shadowBtn,
        fontWeight: 500,
        width: 'auto',
        '@media (max-width: 992px)': {
            minWidth: '100%'
        },
        ':hover': {
            background: colors.grey600,
        },
        ':focus': {
            background: colors.grey600
        },
        ':active': {
            background: colors.grey50
        }

    },
    primary: {
        border: 0,
        background: colors.blue500,
        color: colors.blue50,
        ':hover': {
            background: colors.blue700
        },
        ':focus': {
            background: colors.blue700
        },
        ':active': {
            background: colors.blue700
        }
    },
    success: {
        background: colors.green500,
        color: colors.green50,
        ':hover': {
            background: colors.green700
        },
        ':focus': {
            background: colors.green700
        },
        ':active': {
            background: colors.green700
        }
    },
    warning: {
        background: colors.orange500,
        color: colors.orange50,
        ':hover': {
            background: colors.orange700
        },
        ':focus': {
            background: colors.orange700
        },
        ':active': {
            background: colors.orange700
        }
    },
    danger: {
        background: colors.red500,
        color: colors.red50,
        ':hover': {
            background: colors.red700
        },
        ':focus': {
            background: colors.red700
        },
        ':active': {
            background: colors.red700
        }
    },
    xl: {
        height: 56,
        paddingLeft: 26,
        paddingRight: 26,
        lineHeight: 1.5,
        fontSize: 16
    },
    lg: {
        height: 40,
        paddingLeft: 16,
        paddingRight: 16,
        lineHeight: 1.3,
        fontSize: 14
    },
    md: {
        height: 36,
        paddingLeft: 14,
        paddingRight: 14,
        lineHeight: 1,
        fontSize: 13
    },
    sm: {
        height: 30,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 12,
        lineHeight: .8,
    },
    xs: {
        height: 24,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 11,
        lineHeight: .6,
    },

};

