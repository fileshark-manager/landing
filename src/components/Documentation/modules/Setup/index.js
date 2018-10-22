import React from 'react';
import DocumentationSection from '../../../DocumentationSection';
import DocumentationCode from '../../../DocumentationCode';

/**
 * Renders Setup component
 * @returns {JSX}
 */
const Setup = () => (
    <DocumentationSection id="setup">
        <h1>Setup</h1>

        <p>Include the <strong>main.js</strong> file into your page. You can find this file in the archive, in the <strong>js</strong> folder.</p>

        <DocumentationCode language="html">{'<script src="/js/main.js"></script>'}</DocumentationCode>
    </DocumentationSection>
);

export default Setup;
