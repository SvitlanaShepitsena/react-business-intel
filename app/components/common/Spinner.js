import React from 'react';
import Radium from 'radium'
/*Styles*/
import colors from '../../settings/colors.js';

@Radium
export default class Spinner extends React.Component {
    render() {
        return (
            <div style={[styles.base]}>
                <div style={[this.props.sent && styles.animation]}>{!this.props.sent && 'Not send yet'}</div>
            </div>
        );
    }
}

var pulseKeyframes = Radium.keyframes({
    '0%': {
        width: '1%',
        background: 'blue'
    },
    '100%': {
        width: '100%',
        background: 'red'
    },
}, 'Spinner');

var styles = {
    base: {
        background: colors.grey200,
        marginBottom: 8,
        padding: 8,
        height: 24
    },
    animation: {
        animation: `${pulseKeyframes} 3s ease 0s forwards`,
        height: '4px'
    }
};
