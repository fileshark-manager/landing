import React from 'react';
import {withSiteData} from 'react-static';
import Layout from '../components/Layout';
import DocumentationComponent from '../components/Documentation';

/**
 * Renders Documentation component
 * @returns {JSX}
 */
const Documentation = () => (
    <Layout title="File.Shark Media manager - Documentation">
        <DocumentationComponent />
    </Layout>
);

export default withSiteData(Documentation);