import React from 'react';
import Radium from 'radium'

@Radium
export default class Spinner extends React.Component {
    render() {
        return (
            <div>
                <hr/>
                <div style={[this.props.sent && styles.animation]}>{!this.props.sent && 'not send yet'}</div>
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
    animation: {
        animation: `${pulseKeyframes} 3s ease 0s forwards`,
        height: '4px'
    }
};
