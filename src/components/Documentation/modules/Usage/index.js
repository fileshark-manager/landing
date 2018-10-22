import React from 'react';
import DocumentationSection from '../../../DocumentationSection';
import DocumentationCode from '../../../DocumentationCode';
import DocumentationInfo from '../../../DocumentationInfo';

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

        <DocumentationInfo
            title="root"
            type="HTMLElement"
            description="Media manager code will be inserted into this html element." />

        <DocumentationInfo
            title="host"
            type="String"
            description="Host address for queries." />

        <DocumentationInfo
            title="endpoints"
            type="Object"
            description="Object with properties where each property is an endpoint url." />

        <DocumentationInfo
            title="endpoints.folder"
            type="String"
            description="Endpoint for working with folders." />

        <DocumentationInfo
            title="endpoints.file"
            type="String"
            description="Endpoint for working with files." />

        <DocumentationInfo
            title="headers"
            type="Object"
            description="Used to send custom headers to the server." />

        <DocumentationInfo
            title="onInsertFile"
            type="Function"
            description="Callback function needed to insert media file into the post. Since our product is not designed for any particular CMS, you need to determine the way to add a file into the post by yourself." />

        <p><strong>onInsertFile</strong> function receives the object with data about current selected file. This object contains the following properties:</p>

        <DocumentationInfo
            title="id"
            type="String"
            description="File id." />

        <DocumentationInfo
            title="title"
            type="String"
            description="File title." />

        <DocumentationInfo
            title="url"
            type="String"
            description="File url." />

        <DocumentationInfo
            title="description"
            type="String"
            description="File description." />

        <DocumentationInfo
            title="alt"
            type="String"
            description="File alt text." />

        <DocumentationInfo
            title="created"
            type="String"
            description="File creation date." />

        <DocumentationInfo
            title="dimensions"
            type="String"
            description="File dimensions." />

        <DocumentationInfo
            title="extension"
            type="String"
            description="File extension." />

        <DocumentationInfo
            title="size"
            type="String"
            description="File size." />

        <DocumentationInfo
            title="folder"
            type="String"
            description="Id of the folder to which the file belongs." />

        <DocumentationInfo
            title="filename"
            type="String"
            description="Real filename." />

        <p>File insertion functionality will not be available if <strong>onInsertFile</strong> callback function is not defined.</p>
    </DocumentationSection>
);

export default Usage;
