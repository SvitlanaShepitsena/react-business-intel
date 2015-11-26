import React from 'react';

export default class Toolbar extends React.Component {
    render() {

        let appToolbar = {
            backgroundColor: 'whitesmoke',
            boxShadow: '0 1px 2px rgba(0,0,0,.3)',
            display: 'block',
            width: '100%',
            height: 'auto',
        };
        let titleStyles = {
            fontSize: 22,
            lineHeight: 4,
            marginLeft: 20,
            display: 'inline-block'
        };

        return (
            <div style={appToolbar}>
                <div style={titleStyles}>
                    {this.props.title}
                </div>
            </div>
        )
    }
};


