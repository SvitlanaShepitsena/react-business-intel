import React from 'react';
import Radium from 'radium';
import tinycolor from 'tinycolor2';


@Radium
export default class Button extends React.Component {

    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        super(props);

        this.state = {
            count: 0,
            even: true
        }
    }

    increaseCount(e) {
        e.preventDefault();
        let count = this.state.count + 1;
        let even = !this.state.even;

        this.setState({
            count: count,
            even: even
        });
    }

    /*Requiring parameters(optional.)*/
    //static propTypes = {
    //    kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
    //};
    render() {
        return (
            <div>
                <span>{this.props.name}</span>
                <div>
                    Count:{this.state.count}
                </div>
                {/* Apply styles conditionally when click count is even*/}
                <button style={[ styles.base, this.state.even && styles[this.props.kind] ]}
                        onClick={this.increaseCount.bind(this)}>
                    {this.props.children}
                </button>
            </div>
        )
    }
};
var styles = {
    base: {
        background: tinycolor("grey"),
        color: 'white',
        // Adding interactive state couldn't be easier! Add a special key to your
        // style object (:hover, :focus, :active, or @media) with the additional rules.
        ':hover': {
            background: tinycolor('grey').lighten(9).toHexString()
        }
    },
    primary: {
        background: 'blue'
    },
    warning: {
        background: 'red'
    },
    success: {
        background: 'green'
    }
};


//var key = 'success';
//
//var myColor = styles.primary;
//var myColor2 = styles['primary'];
//
//var myColor3=styles[key];




