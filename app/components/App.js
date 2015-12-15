import React from 'react';
import {Link} from 'react-router';
import Helmet from "react-helmet";
import Aside from "./common/Aside";
import Toolbar from "./common/Toolbar";
import Radium from 'radium'
import typography from '../settings/typography.js';

@Radium
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.location,
            windowWidth: 0,
            mediaBreakPoint: 762
        }
    }

    resize = ()=>this.setState({windowWidth: window.innerWidth});

    componentDidMount() {
        this.setState({windowWidth: window.innerWidth});
        window.addEventListener('resize', this.resize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize.bind(this));
    }

    render() {
        let content = "ReactJs. Best Practices for Personal Webapps";
        let youTubeId = 'xjX_-VjsUfU';
        return (
            <div className="container">
                <Radium.Style rules={
               {iframe:this.state.windowWidth<this.state.mediaBreakPoint &&{width:'100%',height:'auto'},
                textarea:{font:typography.fontFamilySegoe}
                }
                }/>

                <Helmet
                    title="Web Application Startup Template with ReactJs"
                    meta={[
                    {"property": "og:title", "content": content},
                    {"property": "og:url", "content": `http://www.chicagowebapp.com${this.state.location.pathname}`},
                    {"property": "og:video", "content": `http://youtu.be/${youTubeId}`},
                    {"property": "og:description", "content": "Web app template in details"},
                    {"property": "og:image", "content": `http://img.youtube.com/vi/${youTubeId}/hqdefault.jpg`},
                ]}
                />
                <div className="row">
                    <div className=" three columns">
                        <Aside/>
                    </div>
                    <div className="nine columns">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
};

