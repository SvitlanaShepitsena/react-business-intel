import React from 'react';
import YouTube from 'react-youtube';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const opts = {
            height: '490',
            width: '740',
            playerVars: {
                autoplay: 0
            }
        };
        return (
            <div>
                <span>{this.props.fbArticle.title}</span>
                <div>
                    {this.props.fbArticle &&
                    <YouTube
                        url={this.composeYoutubeUrl(this.props.fbArticle.youtubeId)}
                        opts={opts}
                    />}
                </div>
            </div>
        )
    }

    composeYoutubeUrl(key) {
        return `http://youtu.be/${key}`;
    }
}
;

