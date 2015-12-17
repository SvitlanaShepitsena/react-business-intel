import React from 'react';
import Radium from 'radium';
import Helmet from "react-helmet";
import Actions from '../actions/actions';
/*Components*/
import Toolbar from '../common/Toolbar';
import Spinner from '../common/Spinner';
/*Styles*/
import layout from '../../settings/layout.js';

@Radium
export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sent: false}
        this.state = {
            location: this.props.location
        };
    }

    sendMessage = (e)=> {
        this.setState({sent: true});
    }

    cancelMessage = (e)=> {
        this.setState({sent: false});
    }

    updateLocal(event) {
        Actions.update(event);
    }

    render() {
        let title = "ReactJs. Best Practices for Personal Webapps";
        let description = "This project is an implementation of react isomorphic (universal) webapp. It allows to create your react app ones and render it on server and client by using flux store (alt implementation of flux). The project also implements 'lazy' (async) loading of react components via require.ensure and Webpack. It really works with ES6 modules. For layout we used just skeleton and manage inline styles with Radium. Imho, it is a good starter point for a small personal website. Hope our tutorials and project was useful for learning react workflow";
        let youTubeId = 'xjX_-VjsUfU';
        let url = `http://www.chicagowebapp.com${this.state.location.pathname}`;
        let video = `http://youtu.be/${youTubeId}`;
        let image = `http://img.youtube.com/vi/${youTubeId}/hqdefault.jpg`;
        return (
            <div id="contactUs">
                <Radium.Style
                    scopeSelector="#contactUs"
                    rules={{
                     ul:{listStyleType:'none',margin:0},
                     li:{display:'inline-block'}
                    }}/>
                <Helmet
                    title="Web Application Startup Template with ReactJs"
                    meta={[
                    {"property": "og:title", "content": title},
                    {"property": "og:url", "content": url},
                    {"property": "og:video", "content": video},
                    {"property": "og:description", "content": description},
                    {"property": "og:image", "content": image},
                ]}
                />
                <Toolbar title="Contact Us"/>

                <Spinner sent={this.state.sent}/>
                <ul>
                    <li>
                        <div style={[styles.btnContainer]}>
                            <button onClick={this.sendMessage}>Send</button>
                        </div>
                    </li>
                    <li>
                        <div style={[styles.buttonStyle]}>
                            <button onClick={this.cancelMessage}>Cancel</button>
                        </div>

                    </li>
                </ul>
                <form >
                    <input
                        type="email"
                        style={styles.email}
                        placeholder="Your email"
                        defaultValue={this.props.email}
                        onChange={this.updateLocal}
                    />
                     <textarea
                         className="u-full-width "
                         type="text"
                         style={styles.messageStyles}
                         placeholder="Article Content"
                         defaultValue={this.props.message}
                         onChange={this.updateLocal}>
                     </textarea>
                </form>

            </div>
        )
    }
};

var styles = {
    btnContainer: {
        display: 'inline-block',
        margin: '4px'
    },
    email: {
        color: '#1E88E5',
        lineHeight: 1.5,
        padding: layout.padding5
    },
    messageStyles: {
        display: 'block',
        height: '100%',
        padding: layout.padding5,
        minHeight: 200
    },
};
