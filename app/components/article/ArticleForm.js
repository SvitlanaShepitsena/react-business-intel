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
        return (
            <div>
                <Toolbar title="New Article "/>
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


