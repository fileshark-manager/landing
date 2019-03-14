import React from 'react';
import {Link} from 'react-static';
import DocumentationSection from '../../../DocumentationSection';
import Notification from '../../../Notification';

/**
 * Renders GettingStarted component
 * @returns {JSX}
 */
const GettingStarted = () => (
    <DocumentationSection id="getting-started">
        <h1>Getting Started</h1>

        <Notification>
            Attention! This is only an interface solution. It means that you will need to launch it on your own preconfigured server.
        </Notification>

        <p>To start using «File.Shark» media manager it is necessary to do the next things:</p>

        <ul>
            <li>download archive with files (in this archive you will find <i>index.html</i> file with example of launching media manager, <i>File.Shark Media manager - Documentation.pdf</i> file with documentation, js folder with <i>file.shark.js</i> file, source folder with project source code)</li>
            <li>include <i>file.shark.js</i> file to your page</li>
            <li>initialize «File.Shark» media manager (check <Link to="#usage">usage</Link> section for more details)</li>
            <li>configure the server to work with media manager</li>
        </ul>
    </DocumentationSection>
);

export default GettingStarted;
