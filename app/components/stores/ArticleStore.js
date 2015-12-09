import alt from '../alt';
import Actions from '../actions/actions';
import ArticleSource from '../sources/ArticleSource'




import {decorate, bind, datasource} from 'alt/utils/decorators';


@datasource(ArticleSource)
@decorate(alt)
class ArticleStore {
    constructor() {
        this.state = {
            articles: [],
            articlesLoading: true
        };

        this.on('init', this.bootstrap);
        this.on('bootstrap', this.bootstrap);
    }

    bootstrap() {
    }

    @bind(Actions.articlesLoading)
    articlesLoading() {
        this.setState({
            articlesLoading: true
        });
    }

    @bind(Actions.articlesReceived)
    receivedArticles(articles) {
        this.setState({
            articles,
            articlesLoading: false
        });
    }

    @bind(Actions.postArticle)
    postArticle(article) {
        setTimeout(this.getInstance().postArticle, 10);
    }

    @bind(Actions.articleReceived)
    articleReceived(article) {
        this.state.articles[article.key]=article;
        this.setState({
            articles:this.state.articles
        });
    }


}

export default alt.createStore(ArticleStore);
