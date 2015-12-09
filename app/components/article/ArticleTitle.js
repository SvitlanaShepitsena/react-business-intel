import React from 'react';
import Radium from 'radium';
import Actions from '../actions/actions';
/*Styles*/
import layout from '../../settings/layout.js';


@Radium
export default class ArticleTitle extends React.Component {
    constructor(props) {
        super(props);

    }

    updateLocal(event) {
        Actions.update(event);
    }

    render() {
        return (
            <div className="row">
                <div className="twelve columns">
                    <input
                        type="text"
                        style={styles.titleStyles}
                        placeholder="Article Title"
                        defaultValue={this.props.title}
                        onChange={this.updateLocal}
                    />
                </div>
            </div>
        )
    }
};

var styles = {
    titleStyles: {
        color: '#1E88E5',
        lineHeight: 1.5,
        padding: layout.padding5,
        width: '100%'
    }
};
