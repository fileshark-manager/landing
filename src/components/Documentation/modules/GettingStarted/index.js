import React from 'react';
import DocumentationSection from '../../../DocumentationSection';

/**
 * Renders GettingStarted component
 * @returns {JSX}
 */
const GettingStarted = () => (
    <DocumentationSection id="getting-started">
        <h1>Getting Started</h1>

        <p>To start using «File.Shark» media manager it is necessary to do the next things:</p>

        <ul>
            <li>download archive with files (in this archive you will find <i>index.html</i> file with example of launching media manager, <i>File.Shark Media manager - Documentation.pdf</i> file with documentation, js folder with <i>main-[hash].js</i> file)</li>
            <li>include all required assets</li>
            <li>initialize «File.Shark» media manager</li>
            <li>configure the server to work with media manager</li>
        </ul>
    </DocumentationSection>
);

export default GettingStarted;
