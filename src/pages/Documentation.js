import React from 'react';
import {withSiteData} from 'react-static';
import flow from 'lodash/flow';
import Layout from '../components/Layout';
import DocumentationComponent from '../components/Documentation';
import TrackedComponent from '../HOC/TrackedComponent';

/**
 * Renders Documentation component
 * @returns {JSX}
 */
const Documentation = () => (
    <Layout title="File.Shark Media manager - Documentation">
        <DocumentationComponent />
    </Layout>
);

export default flow(
    TrackedComponent,
    withSiteData
)(Documentation);
