import React from 'react';

export default class Article extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <span>{this.props.params.id}</span>
            </div>
        )
    }
}
;

