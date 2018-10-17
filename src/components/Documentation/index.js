import React from 'react';
import DocumentationSection from '../DocumentationSection';
import DocumentationCode from '../DocumentationCode';
import DocumentationInfo from '../DocumentationInfo';
import './index.scss';

/**
 * Renders Documentation component
 * @returns {JSX}
 */
const Documentation = () => (
    <section className="Documentation">
        <div className="Documentation__wrapper">
            <div className="Documentation__content">
                <div className="Documentation__aside">
                    <div className="Documentation__title">
                        <h2>Documentation</h2>
                    </div>

                    <div className="Documentation__content">
                        <ul className="Documentation__list">
                            <li className="Documentation__item">
                                <a href="#getting-started">
                                    <h4>Getting Started</h4>
                                </a>
                            </li>

                            <li className="Documentation__item">
                                <a href="#setup">
                                    <h4>Setup</h4>
                                </a>
                            </li>

                            <li className="Documentation__item">
                                <a href="#usage">
                                    <h4>Usage</h4>
                                </a>
                            </li>

                            <li className="Documentation__item">
                                <a href="#server">
                                    <h4>Server</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="Documentation__main">
                    <DocumentationSection id="getting-started">
                        <h1>Getting Started</h1>

                        <p>To start using «File.Shark» media manager it is necessary to do the next things:</p>

                        <ul>
                            <li>download archive with files</li>
                            <li>include all required assets</li>
                            <li>initialize «File.Shark» media manager</li>
                            <li>configure the server to work with media manager</li>
                        </ul>
                    </DocumentationSection>

                    <DocumentationSection id="setup">
                        <h1>Setup</h1>

                        <p>Include the <strong>main.js</strong> file into your page. You can find this file in the archive, in the <strong>js</strong> folder.</p>

                        <DocumentationCode language="html">{'<script src="/js/main.js"></script>'}</DocumentationCode>
                    </DocumentationSection>

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
                </div>
            </div>
        </div>
    </section>
);

export default Documentation;
