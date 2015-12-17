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
        let description = "Radium Keyframes Functionality Example";
        let url = `http://www.chicagowebapp.com${this.state.location.pathname}`;
        let image = `http://res.cloudinary.com/svitlana/image/upload/v1450385637/chicagoweb/contact.jpg`;
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
                    {"property": "og:description", "content": description},
                    {"property": "og:image", "content": image},
                ]}
                />
                <Toolbar title="Contact Us"/>

                <Spinner sent={this.state.sent}/>
                <ul>
                    <li>
                        <div style={[styles.btnContainer]}>
                            <button className="button-primary" onClick={this.sendMessage}>Send</button>
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
