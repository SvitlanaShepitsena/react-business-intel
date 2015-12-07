import React from 'react';
import Radium from 'radium';
import Toolbar from '../common/Toolbar';
import colors from '../../settings/colors.js';
import layout from '../../settings/layout.js';
import settings from '../../settings/components.js';
import connectToStores from 'alt/utils/connectToStores';
import ArticleStore from '../stores/ArticleStore';
import FormGroup from './FormGroup';

@Radium
@connectToStores
export default class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
    }
    static getStores() {
        return [ArticleStore];
    }

    static getPropsFromStores() {
        return ArticleStore.getState();
    }

    render() {
        return (
            <div>
                <Toolbar title="New Article"/>
                <form>
                    <FormGroup/>
                </form>
                <div>
                    {this.props.title}
                </div>
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
