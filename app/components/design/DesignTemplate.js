import React from 'react';
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
                <ul style={[styles.listUnstyled]}>
                    <li style={[styles.listInline]}>
                        <Button size="xs" kind="primary">
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
                        <Button size="md" kind="primary">
                            <Code style={{marginRight:4,marginBottom:2}}/>
                            Code
                        </Button>
                    </li>
                    <li style={[styles.listInline]}>
                        <Button size="lg" kind="primary">
                            <Code style={{marginRight:4,marginBottom:2}}/>
                            Code
                        </Button>
                    </li>
                    <li style={[styles.listInline]}>
                        <Button size="xl" kind="primary">
                            <Code style={{marginRight:4,marginBottom:2}}/>
                            Code
                        </Button>
                    </li>
                </ul>
                <ul style={[styles.listUnstyled]}>
                    <li style={[styles.listInline]}>
                        <ButtonFab size="xs" kind="warning">
                            <Code />
                        </ButtonFab>
                    </li>
                    <li style={[styles.listInline]}>
                        <ButtonFab size="sm" kind="warning">
                            <Code />
                        </ButtonFab>
                    </li>
                    <li style={[styles.listInline]}>
                        <ButtonFab size="md" kind="primary">
                            <Code />
                        </ButtonFab>
                    </li>
                    <li style={[styles.listInline]}>
                        <ButtonFab size="lg" kind="primary">
                            <Code />
                        </ButtonFab>
                    </li>
                    <li style={[styles.listInline]}>
                        <ButtonFab size="xl" kind="primary">
                            <Code />
                        </ButtonFab>
                    </li>
                </ul>
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


