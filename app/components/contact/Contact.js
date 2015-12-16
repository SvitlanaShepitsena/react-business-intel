import React from 'react';
import Helmet from "react-helmet";
/*Components*/
import Toolbar from '../common/Toolbar';
import Spinner from '../common/Spinner';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sent: false}
    }

    sendMessage = (e)=> {
        this.setState({sent: true});
    }

    cancelMessage = (e)=> {
        this.setState({sent: false});
    }

    render() {
        return (
            <div>
                <Helmet title="Contact Us"/>
                <Toolbar title="Contact Component"/>
                <div>
                    Contact us form
                </div>
                <div>
                    <button onClick={this.sendMessage}>Send</button>
                    <button onClick={this.cancelMessage}>Cancel</button>
                </div>
                <div>
                    <Spinner sent={this.state.sent}/>
                </div>

            </div>
        )
    }
};
