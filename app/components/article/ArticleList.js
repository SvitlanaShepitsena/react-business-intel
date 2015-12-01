import React from 'react';
import Article from './Article';
import {Link} from 'react-router';

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [
                {
                    id: 1,
                    title: 'Article 1',
                    body: 'Body of article 1'
                },
                {
                    id: 2,
                    title: 'Article 2',
                    body: 'Body of article 2'
                }
            ]
        };
    }

    render() {
        return (
            <div>
                {/* Parent view if no children */}
                {!this.props.children &&
                <ul>
                    {this.state.articles.map((article, i)=> {
                        return (
                            <li key={i}><Link to={`/articles/${article.id}`}>{article.title}</Link>

                            </li>
                        )
                    })}
                </ul>
                }

                {/* Child view */}
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
;
var arr1 = [1, 2, 3];

arr1.map((el)=> {
    return el * 10;
})

