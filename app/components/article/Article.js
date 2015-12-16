import React from 'react';
import YouTube from 'react-youtube';
import Radium from 'radium';

@Radium
export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const opts = {
            height: '200',
            width: '300',
            playerVars: {
                autoplay: 0
            }
        };
        return (
            <li style={[styles.thumb]}>
                {this.props.fbArticle &&
                <YouTube
                    url={this.composeYoutubeUrl(this.props.fbArticle.youtubeId)}
                    opts={opts}
                />
                }
            </li>
        )
    }

    composeYoutubeUrl(key) {
        return `http://youtu.be/${key}`;
    }
} ;
var styles = {
    thumb: {
        margin: 5
    }
};
