import React from 'react';
import Radium from 'radium';
import Actions from '../actions/actions';
/*Styles*/
import colors from '../../settings/colors.js';
import layout from '../../settings/layout.js';
import typography from '../../settings/typography.js';

@Radium
export default class AddVideo extends React.Component {
    constructor(props) {
        super(props);

    }

    updateLocal(event) {
        Actions.update(event);
    }

    render() {
        return (
            <div>
                <label style={[styles.base]} htmlFor="videoUrl">Embed Video</label>
                <input
                    className="u-full-width"
                    type="text"
                    name="videoUrl"
                    placeholder="Video URL"/>
            </div>
        )
    }
};

var styles = {
    base: {
        color: colors.blue600
    }
};
