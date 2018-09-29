import React from 'react';
import {withSiteData} from 'react-static';
import Layout from '../components/Layout';
import CtaBox from '../components/CtaBox';

/**
 * Renders Home component
 * @returns {JSX}
 */
const Home = () => (
    <Layout>
        Home page content

        <CtaBox />
    </Layout>
);

export default withSiteData(Home);
