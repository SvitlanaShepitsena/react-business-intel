import React from 'react';
import Radium from 'radium';
import Actions from '../actions/actions';


@Radium
export default class UploadPictures extends React.Component {
    constructor(props) {
        super(props);
    }

    updateLocal(event) {
        Actions.update(event);
    }

    render() {
        return (
            <div className="">
                <p>
                    <label htmlFor="picturesUpload">Upload Pictures</label>
                </p>
                <p>
                    <input
                        name="picturesUpload"
                        label="File input"
                        type="file"/>
                </p>
            </div>
        )
    }
};

