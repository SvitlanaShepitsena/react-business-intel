import React from 'react';
import Radium from 'radium';
import Toolbar from '../common/Toolbar';
import colors from '../../settings/colors.js';
import layout from '../../settings/layout.js';
import settings from '../../settings/components.js';

@Radium
export default class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Toolbar title="New Article"/>
                <form>
                    <p>
                        <input
                            style={styles.titleStyles}
                            placeholder="Title"/>
                    </p>
                    <p>
                        <textarea
                            style={styles.contentStyles}
                            cols="86"
                            type="text"
                            placeholder="Article Content"/>
                    </p>
                    <p>
                        <label htmlFor="picturesUpload">Upload Pictures</label>
                    </p>
                    <p>
                        <input
                            name="picturesUpload"
                            label="File input"
                            type="file"/>
                    </p>
                    <p>
                        <label style={[styles.base]} htmlFor="videoUrl">Embed Video</label>
                    </p>
                    <p>
                        <input
                            name="videoUrl"
                            style={styles.titleStyles}
                            placeholder="Video URL"/>
                    </p>
                    <div>
                        <input type="submit"
                               style={[styles.buttonStyles]}/>
                    </div>
                </form>
            </div>
        )
    }
};

var styles = {
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
