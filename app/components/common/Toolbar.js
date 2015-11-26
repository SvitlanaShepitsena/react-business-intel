import React from 'react';

export default class Toolbar extends React.Component {
    render() {
        return (
            <div style={styles.appToolbar}>
                <div style={styles.titleStyles}>
                    {this.props.title}
                </div>
            </div>
        )
    }
};


var styles = {
    appToolbar: {
        backgroundColor: 'whitesmoke',
        boxShadow: '0 1px 2px rgba(0,0,0,.3)',
        display: 'block',
        width: '100%',
        height: 'auto',
    },
    titleStyles: {
        fontSize: 22,
        lineHeight: 4,
        marginLeft: 20
    }
};
