'use strict'
import alt from '../alt';
class Actions {
    constructor() {
        this.generateActions(
            'articlesReceived',
            'articlesFailed',
            'articlesLoading',
            'postArticle',
            'postArticleSuccess',
            'postArticleError',
            'articleReceived'

        );
    }
}
export default alt.createActions(Actions);