import React from 'react';
import Radium from 'radium';
import Toolbar from '../common/Toolbar';
import colors from '../../settings/colors.js';
import layout from '../../settings/layout.js';
import settings from '../../settings/components.js';
import Actions from '../actions/actions';

@Radium
export default class InputElement extends React.Component {
    constructor(props) {
        super(props);

    }

    updateLocal(event) {
        Actions.update(event);
    }

    render() {
        return (
            <p>
                <input
                    style={styles.titleStyles}
                    placeholder="Title"
                    defaultValue={this.props.title}
                    onChange={this.updateLocal}

                />
            </p>
        )
    }
};

var styles = {
    main:{
     border:'3 solid red'
    },
    buttonStyles: {
        backgroundImage: 'none',
        border: '1px solid transparent',
        borderRadius: 4,
        color: '#fff',
        backgroundColor: colors.blue700,
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 1.42857143,
        marginBottom: 0,
        padding: '6px 12px',
        textAlign: 'center',
        touchAction: 'manipulation',
        userSelect: 'none',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',

        ':hover': {
            backgroundColor: '#244762'
        },

        ':focus': {
            backgroundColor: '#0088FF'
        },

        ':active': {
            backgroundColor: '#005299',
            transform: 'translateY(1px)',
        },
    },
    base: {
        color: colors.blue600
    },
    titleStyles: {
        color: '#1E88E5',
        lineHeight: 1.5,
        padding: layout.padding5,
        width: 600
    },
    contentStyles: {
        display: 'block',
        height: '100%',
        padding: layout.padding5,
        minHeight: 300
    },
};
