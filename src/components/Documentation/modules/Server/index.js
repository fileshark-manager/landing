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

        <h4>POST /yourFolderEndpoint - create a new folder</h4>

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
        created: "15.10.2018"
        description: ""
        id: "dfd8c3e4-45b3-4278-acba-467b42dae5f9"
        title: "Nature"
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
    </DocumentationSection>
);

export default Server;
