import React from 'react';
import DocumentationSection from '../../../DocumentationSection';
import DocumentationCode from '../../../DocumentationCode';
import DocumentationInfo from '../../../DocumentationInfo';
import DocumentationTable from '../../../DocumentationTable';

/**
 * Renders Server component
 * @returns {JSX}
 */
const Server = () => (
    <DocumentationSection id="server">
        <h1>Server</h1>

        <p>«File.Shark» media manager is only an ui solution at current moment, so you will have to write the server part by yourself. Here you can find the list with request formats that our media manager will send to your server and response format that media manager expects to receive in response.</p>

        <h3>Folders</h3>

        <p>This functionality allows you to create, edit and delete folders. If you are sure that you do not need this functionality, you can skip this part and then you will have one folder by default.</p>

        <h4>
            <ul>
                <li>POST /yourFolderEndpoint - create a new folder</li>
            </ul>
        </h4>

        <p>Request parameters:</p>

        <DocumentationTable>
            <tr>
                <th>Param</th>
                <th>Type and Description</th>
            </tr>

            <tr>
                <td>title</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: folder name</p>
                </td>
            </tr>
        </DocumentationTable>

        <p>Expected response:</p>

        <DocumentationCode>
            {
                `
    {
        created: "15.10.2018",
        description: "",
        id: "dfd8c3e4-45b3-4278-acba-467b42dae5f9",
        title: "Nature",
        total: "0"
    }
                `
            }
        </DocumentationCode>

        <DocumentationTable>
            <tr>
                <th>Param</th>
                <th>Type and Description</th>
            </tr>

            <tr>
                <td>created</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: creation date</p>
                </td>
            </tr>

            <tr>
                <td>description</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: folder description</p>
                </td>
            </tr>

            <tr>
                <td>id</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: created folder id</p>
                </td>
            </tr>

            <tr>
                <td>title</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: created folder title</p>
                </td>
            </tr>

            <tr>
                <td>total</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: number of files in folder</p>
                </td>
            </tr>
        </DocumentationTable>

        <br />
        <br />

        <h4>
            <ul>
                <li>PUT /yourFolderEndpoint - edit folder</li>
            </ul>
        </h4>

        <p>Request parameters:</p>

        <DocumentationTable>
            <tr>
                <th>Param</th>
                <th>Type and Description</th>
            </tr>

            <tr>
                <td>title</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: folder name</p>
                </td>
            </tr>

            <tr>
                <td>description</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: folder description</p>
                </td>
            </tr>
        </DocumentationTable>

        <p>Expected response:</p>

        <DocumentationCode>
            {
                `
    {
        created: "15.10.2018",
        description: "",
        id: "dfd8c3e4-45b3-4278-acba-467b42dae5f9",
        title: "Nature",
        total: "0"
    }
                `
            }
        </DocumentationCode>

        <DocumentationTable>
            <tr>
                <th>Param</th>
                <th>Type and Description</th>
            </tr>

            <tr>
                <td>created</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: creation date</p>
                </td>
            </tr>

            <tr>
                <td>description</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: folder description</p>
                </td>
            </tr>

            <tr>
                <td>id</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: edited folder id</p>
                </td>
            </tr>

            <tr>
                <td>title</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: edited folder title</p>
                </td>
            </tr>

            <tr>
                <td>total</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: number of files in folder</p>
                </td>
            </tr>
        </DocumentationTable>

        <br />
        <br />

        <h4>
            <ul>
                <li>DELETE /yourFolderEndpoint/idOfDeletedFolder - delete folder</li>
            </ul>
        </h4>

        <p>No request parameters.</p>

        <p>Expected response:</p>

        <DocumentationCode>
            {'dfd8c3e4-45b3-4278-acba-467b42dae5f9'}
        </DocumentationCode>

        <DocumentationInfo type="String" description="id of deleted folder" />

        <h3>Files</h3>

        <p>This functionality allows you to upload, edit and delete files.</p>

        <h4>
            <ul>
                <li>GET /yourFileEndpoint - get the list of files</li>
            </ul>
        </h4>

        <p>Request parameters:</p>

        <DocumentationTable>
            <tr>
                <th>Param</th>
                <th>Type and Description</th>
            </tr>

            <tr>
                <td>folder</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: current folder id</p>
                </td>
            </tr>

            <tr>
                <td>page</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: current page (offset)</p>
                </td>
            </tr>

            <tr>
                <td>type</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: files extension (from filters)</p>
                </td>
            </tr>

            <tr>
                <td>startDate</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file creation start date in ISO format (from filters)</p>
                </td>
            </tr>

            <tr>
                <td>endDate</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file creation end date in ISO format (from filters)</p>
                </td>
            </tr>
        </DocumentationTable>

        <p>Expected response:</p>

        <DocumentationCode>
            {
                `
    {
        hasMore: false,
        list: [
            {
                alt: "",
                created: "15.10.2018",
                description: "",
                dimensions: "",
                extension: "zip",
                filename: "favicon_package_v0.16.zip",
                folder: "7f55583d-d42f-4bc3-9853-7f64b93f3c76",
                id: "b713c14b-9fea-49fd-bda7-e4c5e9045a46",
                size: "49.22 KB",
                title: "favicon_package_v0.16.zip",
                url: "http://localhost:3500/assets/images/b713c14b-9fea-49fd-bda7-e4c5e9045a46/file/favicon_package_v0.16.zip"
            }
        ]
    }
                `
            }
        </DocumentationCode>

        <DocumentationTable>
            <tr>
                <th>Param</th>
                <th>Type and Description</th>
            </tr>

            <tr>
                <td>hasMore</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: Determines if there are more files to show. If true then media manager will do a request to get new files when user scrolls to the end of the current file list. If false, there will be no request.</p>
                </td>
            </tr>

            <tr>
                <td>list</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: List of files to be shown.</p>
                </td>
            </tr>
        </DocumentationTable>

        <p>Each file in the received list should be an object with the following properties:</p>

        <DocumentationTable>
            <tr>
                <th>Param</th>
                <th>Type and Description</th>
            </tr>

            <tr>
                <td>alt</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: alt text if the file is image</p>
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
                <td>description</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file description</p>
                </td>
            </tr>

            <tr>
                <td>dimensions</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file dimensions if the file is image</p>
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
                <td>filename</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: real filename</p>
                </td>
            </tr>

            <tr>
                <td>folder</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: the id of folder in which the file was uploaded</p>
                </td>
            </tr>

            <tr>
                <td>id</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file id</p>
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
        </DocumentationTable>

        <br />
        <br />

        <h4>
            <ul>
                <li>POST /yourFileEndpoint - upload file</li>
            </ul>
        </h4>

        <p>Request parameters:</p>

        <DocumentationTable>
            <tr>
                <th>Param</th>
                <th>Type and Description</th>
            </tr>

            <tr>
                <td>folder</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: id of the folder in which the file will be uploaded</p>
                </td>
            </tr>

            <tr>
                <td>file</td>
                <td>
                    <p>Type: Binary</p>
                    <p>Description: We use «dropzone.js» library to upload files to the server. Checkout their documentation to handle <a target="_blank" href="http://www.dropzonejs.com/#server-side-implementation">basic file uploads on the server</a></p>
                </td>
            </tr>
        </DocumentationTable>

        <p>Expected response:</p>

        <DocumentationCode>
            {
                `
    {
        alt: "",
        created: "15.10.2018",
        description: "",
        dimensions: "1200x900",
        extension: "webp",
        filename: "s1.webp",
        folder: "7f55583d-d42f-4bc3-9853-7f64b93f3c76",
        id: "af638588-2e61-4005-915b-f7a6eb22d3b7",
        size: "214.59 KB",
        title: "s1.webp",
        url: "http://localhost:3500/assets/images/af638588-2e61-4005-915b-f7a6eb22d3b7/file/s1.webp"
    }

                `
            }
        </DocumentationCode>

        <DocumentationTable>
            <tr>
                <th>Param</th>
                <th>Type and Description</th>
            </tr>

            <tr>
                <td>alt</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: alt text if the file is image</p>
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
                <td>description</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file description</p>
                </td>
            </tr>

            <tr>
                <td>dimensions</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file dimensions if the file is image</p>
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
                <td>filename</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: real filename</p>
                </td>
            </tr>

            <tr>
                <td>folder</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: the id of the folder in which the file was uploaded</p>
                </td>
            </tr>

            <tr>
                <td>id</td>
                <td>
                    <p>Type: String</p>
                    <p>Description: file id</p>
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
        </DocumentationTable>
    </DocumentationSection>
);

export default Server;
