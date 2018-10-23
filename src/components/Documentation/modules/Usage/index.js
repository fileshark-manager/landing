import React from 'react';
import DocumentationSection from '../../../DocumentationSection';
import DocumentationCode from '../../../DocumentationCode';
import DocumentationTable from '../../../DocumentationTable';

/**
 * Renders Usage component
 * @returns {JSX}
 */
const Usage = () => (
    <DocumentationSection id="usage">
        <h1>Usage</h1>

        <DocumentationCode>
            {
`
new Fileshark({
    root: document.getElementById('root'),
    host: 'http://localhost:3500',
    endpoints: {
        folder: '/folder',
        file: '/file'
    },
    headers: {
        'Content-Type': 'application/json'
    },
    onInsertFile: function(data) {
        console.log('data:', data);
    }
});
`
            }
        </DocumentationCode>

        <DocumentationTable>
            <tr>
                <th>Param</th>
                <th>Type and Description</th>
            </tr>

            <tr>
                <td>root</td>
                <td>
                    <p>Type: HTMLElement</p>
                    <p>Description: Media manager code will be inserted into this html element.</p>
                </td>
            </tr>

            <tr>
                <td>host</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: Host address for queries.</p>
                </td>
            </tr>

            <tr>
                <td>endpoints</td>
                <td>
                    <p>Type: Object</p>
                    <p>Description: Object with properties where each property is an endpoint url.</p>
                </td>
            </tr>

            <tr>
                <td>endpoints.folder</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: Endpoint for working with folders.</p>
                </td>
            </tr>

            <tr>
                <td>endpoints.file</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: Endpoint for working with files.</p>
                </td>
            </tr>

            <tr>
                <td>headers</td>
                <td>
                    <p>Type: Object</p>
                    <p>Description: Used to send custom headers to the server.</p>
                </td>
            </tr>

            <tr>
                <td>onInsertFile</td>
                <td>
                    <p>Type: Function</p>
                    <p>Description: Callback function needed to insert media file into the post. Since our product is not designed for any particular CMS, you need to determine the way to add a file into the post by yourself.</p>
                </td>
            </tr>
        </DocumentationTable>

        <p><strong>onInsertFile</strong> function receives the object with data about current selected file. This object contains the following properties:</p>

        <DocumentationTable>
            <tr>
                <th>Param</th>
                <th>Type and Description</th>
            </tr>

            <tr>
                <td>id</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file id</p>
                </td>
            </tr>

            <tr>
                <td>title</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file title</p>
                </td>
            </tr>

            <tr>
                <td>url</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file url</p>
                </td>
            </tr>

            <tr>
                <td>description</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file description</p>
                </td>
            </tr>

            <tr>
                <td>alt</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file alt text</p>
                </td>
            </tr>

            <tr>
                <td>created</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file creation date</p>
                </td>
            </tr>

            <tr>
                <td>dimensions</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file dimensions</p>
                </td>
            </tr>

            <tr>
                <td>extension</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file extension</p>
                </td>
            </tr>

            <tr>
                <td>size</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file size</p>
                </td>
            </tr>

            <tr>
                <td>folder</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: id of the folder to which the file belongs</p>
                </td>
            </tr>

            <tr>
                <td>filename</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: real filename</p>
                </td>
            </tr>
        </DocumentationTable>

        <p>File insertion functionality will not be available if <strong>onInsertFile</strong> callback function is not defined.</p>
    </DocumentationSection>
);

export default Usage;
