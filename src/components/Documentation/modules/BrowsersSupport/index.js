import React from 'react';
import DocumentationSection from '../../../DocumentationSection';
import DocumentationTable from '../../../DocumentationTable';

/**
 * Renders BrowsersSupport component
 * @returns {JSX}
 */
const BrowsersSupport = () => (
    <DocumentationSection id="browsers-support">
        <h1>Browsers support</h1>

        <DocumentationTable>
            <tr>
                <th>Browser</th>
                <th>Versions</th>
            </tr>

            <tr>
                <td>Chrome</td>
                <td>
                    last 10 versions
                </td>
            </tr>

            <tr>
                <td>Firefox</td>
                <td>
                    last 10 versions
                </td>
            </tr>

            <tr>
                <td>Opera</td>
                <td>
                    last 5 versions
                </td>
            </tr>

            <tr>
                <td>Safari</td>
                <td>
                    last 4 versions
                </td>
            </tr>

            <tr>
                <td>Edge</td>
                <td>
                    last 3 versions
                </td>
            </tr>

            <tr>
                <td>IE</td>
                <td>
                    11
                </td>
            </tr>
        </DocumentationTable>
    </DocumentationSection>
);

export default BrowsersSupport;
