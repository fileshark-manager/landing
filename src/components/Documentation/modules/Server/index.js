import React from 'react';
import DocumentationSection from '../../../DocumentationSection';
import DocumentationCode from '../../../DocumentationCode';
import DocumentationInfo from '../../../DocumentationInfo';

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




    </DocumentationSection>
);

export default Server;
