import React from 'react';
import Radium from 'radium';

import Toolbar from '../common/Toolbar.js';
import Button from '../common/Button.js';
import ButtonFab from '../common/ButtonFab.js';
import IconBase from '../common/IconBase.js';
import Code from '../icons/code';

@Radium
export default class DesignTemplate extends React.Component {
    // Constructor

    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    render() {
        return (
            <div>
                <Toolbar title="Design Examples"/>
                <h2>Buttons</h2>
                <ul style={[styles.listUnstyled]}>
                    <li style={[styles.listInline]}>
                        <Button size="xs" kind="defalut">
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
                <hr/>
            </div>
        )
    }
}

var styles = {
    listUnstyled: {
        decoration: 'none',
        verticalAlign: 'top'

    },
    listInline: {
        display: 'inline-block',
        margin: '4px'
    },

};


