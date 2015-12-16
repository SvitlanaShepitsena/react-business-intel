import React from 'react';
import Helmet from "react-helmet";
/*Components*/
import Toolbar from '../../../components/common/Toolbar';
import ArticleForm from '../../../components/article/ArticleForm.js';

import Guid from 'guid'

export default class About extends React.Component {
    /* Run extended class constructor. Required in ES6*/
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet title="About Our Project"/>
                <Toolbar title="About Our Project"/>
                <article>

                    <p>
                        This project is an implementation of react isomorphic (universal) webapp. It allows to create
                        your
                        react app ones and
                        render it on server and client by using flux store (alt implementation of flux). The project
                        also
                        implements 'lazy' (async)
                        loading of react components via require.ensure and Webpack. It really works with ES6 modules.
                    </p>

                    <p>
                        For layout we used just skeleton and manage inline styles with Radium. Imho, it is a good
                        starter
                        point for a small personal
                        website. Hope our tutorials and project was useful for learning react workflow.
                    </p>
                    <ol>
                        <li>
                            <code>
                                git clone https://github.com/SvitlanaShepitsena/react-business-intel.git
                            </code>

                        </li>
                        <li>
                            <code>
                                npm install
                            </code>

                        </li>
                        <li>
                            <code>
                                npm run app:server:start:dev
                            </code>
                        </li>
                        <li>
                            <code>
                                npm run app:webpack:start
                            </code>

                        </li>
                    </ol>

                </article>

            </div>
        )
    }
};
