import React from 'react';
import Radium from 'radium';
import Helmet from "react-helmet";
/*Components*/
import Toolbar from '../common/Toolbar.js';
import Button from '../common/Button.js';
import ButtonFab from '../common/ButtonFab.js';
import IconBase from '../common/IconBase.js';
/*Icons*/
import Code from '../icons/code';
/*Styles*/
import colors from '../../settings/colors.js';
import elements from '../../settings/elements.js';

@Radium
export default class DesignTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.location
        }
    }

    render() {
        let title = "ReactJs. Best Practices for Personal Webapps";
        let description = "Buttons design example with a React component styling library Radium";
        var image = "http://res.cloudinary.com/svitlana/image/upload/v1450374277/chicagoweb/Buttons-Design-with-Inline-styles-in-React.jpg";
        let url = `http://www.chicagowebapp.com${this.state.location.pathname}`
        return (
            <div>
                <Helmet
                    title="About Our Project"
                    meta={[
                    {"property": "og:title", "content": title},
                    {"property": "og:description", "content": description},
                    {"property": "og:url", "content": url },
                    {"property": "og:image", "content": image},
                ]}
                />
                <Toolbar title="Design Examples"/>
                <br/>
                <div style={[styles.whiteframe]}>
                    <h2>Buttons</h2>
                    <ul style={[styles.listUnstyled]}>
                        <li style={[styles.listInline]}>
                            <Button size="xs" kind="default">
                                <Code style={{marginRight:4,marginBottom:2}}/>
                                Code
                            </Button>
                        </li>
                        <li style={[styles.listInline]}>
                            <Button size="sm" kind="primary">
                                <Code style={{marginRight:4,marginBottom:2}}/>
                                Code
                            </Button>
                        </li>
                        <li style={[styles.listInline]}>
                            <Button size="md" kind="success">
                                <Code style={{marginRight:4,marginBottom:2}}/>
                                Code
                            </Button>
                        </li>
                        <li style={[styles.listInline]}>
                            <Button size="lg" kind="warning">
                                <Code style={{marginRight:4,marginBottom:2}}/>
                                Code
                            </Button>
                        </li>
                        <li style={[styles.listInline]}>
                            <Button size="xl" kind="danger">
                                <Code style={{marginRight:4,marginBottom:2}}/>
                                Code
                            </Button>
                        </li>
                    </ul>
                </div>
                <br/>
                <div style={[styles.whiteframe, styles.heightFixed]}>
                    <h2>Button-Fab</h2>
                    <ul style={[styles.listUnstyled]}>
                        <li style={[styles.listInline]}>
                            <ButtonFab size="xs" kind="default">
                                <Code />
                            </ButtonFab>
                        </li>
                        <li style={[styles.listInline]}>
                            <ButtonFab size="sm" kind="primary">
                                <Code />
                            </ButtonFab>
                        </li>
                        <li style={[styles.listInline]}>
                            <ButtonFab size="md" kind="success">
                                <Code />
                            </ButtonFab>
                        </li>
                        <li style={[styles.listInline]}>
                            <ButtonFab size="lg" kind="warning">
                                <Code />
                            </ButtonFab>
                        </li>
                        <li style={[styles.listInline]}>
                            <ButtonFab size="xl" kind="danger">
                                <Code />
                            </ButtonFab>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

var styles = {
    whiteframe: {
        padding: 8,
        backgroundColor: colors.grey100,
        //boxShadow: elements.card24
        boxShadow: elements.card8
    },
    heightFixed: {
        position: 'relative',
        height: '100%',
        minHeight: 220
    },
    listUnstyled: {
        decoration: 'none',
        verticalAlign: 'top'

    },
    listInline: {
        display: 'inline-block',
        margin: '4px'
    },

};


