import React from 'react';
import Radium from 'radium';
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
    }

    render() {
        return (
            <div>
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


