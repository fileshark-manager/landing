import React from 'react';
import {withSiteData} from 'react-static';
import Layout from '../components/Layout';
import Technologies from '../components/Technologies';
import CtaBox from '../components/CtaBox';

/**
 * Renders Home component
 * @returns {JSX}
 */
const Home = () => (
    <Layout>
        Home page content

        <Technologies />

        <CtaBox />
    </Layout>
);

export default withSiteData(Home);
