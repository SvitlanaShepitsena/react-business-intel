import React from 'react';
import Radium from 'radium';
import connectToStores from '../../../node_modules/alt/utils/connectToStores';
import ArticleStore from '../stores/ArticleStore.js';
/*App Components*/
import Toolbar from '../common/Toolbar';
import ArticleTitle from './ArticleTitle';
import ArticleContent from './ArticleContent';
import UploadPictures from './../common/UploadPictures';
import AddVideo from './../common/AddVideo';
import Button from './../common/Button.js';
/*Styles*/
import colors from '../../settings/colors.js';
import layout from '../../settings/layout.js';

@connectToStores
@Radium
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
        let svState = false;
        return (
            <div>
                <Toolbar title="New Article"/>
                <form>
                    <Button kind="success" name="Great Button">Radium Button</Button>
                    <ArticleTitle/>
                    <ArticleContent/>
                    <UploadPictures/>
                    <AddVideo/>
                    <input
                        style={[
                        styles.buttonStyles,
                        svState && styles.testStyle
                        ]}
                        type="submit"
                    />
                </form>
                <div>
                    {this.props.title}
                </div>
            </div>
        )
    }
};

var styles = {
    base: {
        color: colors.blue600
    },
    testStyle: {
        backgroundColor: 'brown'
    },
    primary: {
        background: '#0074D9'
    },

    warning: {
        background: '#FF4136'
    },
    buttonStyles: {
        backgroundImage: 'none',
        border: '1px solid transparent',
        borderRadius: 4,
        color: 'green',
        backgroundColor: 'yellow',
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
};
