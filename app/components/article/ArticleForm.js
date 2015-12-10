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
import Button from './../common/Button';
import ButtonFab from './../common/ButtonFab';
/*Styles*/
import colors from '../../settings/colors.js';
import layout from '../../settings/layout.js';
import IconBase from '../common/IconBase.js';
import Code from '../icons/code';

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
        return (
            <div>
                <Toolbar title="New Article "/>
                <ul style={[styles.listUnstyled]}>
                    <li style={[styles.listInline]}>
                        <Button size="xs" kind="primary">
                            <Code style={{marginRight:4,marginBottom:2}}/>
                            Code
                        </Button>
                    </li>
                    <li style={[styles.listInline]}>
                        <Button size="sm" kind="primary">
                            <Code style={{marginRight:4,marginBottom:2}}/>
                            Code
                        </Button>
                    </li>
                    <li style={[styles.listInline]}>
                        <Button size="md" kind="primary">
                            <Code style={{marginRight:4,marginBottom:2}}/>
                            Code
                        </Button>
                    </li>
                    <li style={[styles.listInline]}>
                        <Button size="lg" kind="primary">
                            <Code style={{marginRight:4,marginBottom:2}}/>
                            Code
                        </Button>
                    </li>
                    <li style={[styles.listInline]}>
                        <Button size="xl" kind="primary">
                            <Code style={{marginRight:4,marginBottom:2}}/>
                            Code
                        </Button>
                    </li>
                </ul>
                <ul style={[styles.listUnstyled]}>
                    <li style={[styles.listInline]}>
                        <ButtonFab size="xs" kind="warning">
                            <Code />
                        </ButtonFab>
                    </li>
                    <li style={[styles.listInline]}>
                        <ButtonFab size="sm" kind="warning">
                            <Code />
                        </ButtonFab>
                    </li>
                    <li style={[styles.listInline]}>
                        <ButtonFab size="md" kind="primary">
                            <Code />
                        </ButtonFab>
                    </li>
                    <li style={[styles.listInline]}>
                        <ButtonFab size="lg" kind="primary">
                            <Code />
                        </ButtonFab>
                    </li>
                    <li style={[styles.listInline]}>
                        <ButtonFab size="xl" kind="primary">
                            <Code />
                        </ButtonFab>
                    </li>
                </ul>
                <form>
                    <ArticleTitle/>
                    <ArticleContent/>
                    <UploadPictures/>
                    <AddVideo/>
                </form>
            </div>
        )
    }
};
var styles = {
    listUnstyled: {
        decoration: 'none',
        verticalAlign: 'top'

    },
    listInline: {
        display: 'inline-block',
        margin: '4px'
    },

};


