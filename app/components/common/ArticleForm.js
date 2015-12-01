import React from 'react';
import Radium from 'radium';

@Radium
export default class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Form>
                    <Input
                        label="Email"
                        formControl={true}
                        placeholder="Email"/>
                    <Input
                        label="Password"
                        type="password"
                        formControl={true}
                        placeholder="Password"/>
                    <Input
                        label="File input"
                        type="file"/>
                    <HelpText value="Example block-level help text here."/>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
};

