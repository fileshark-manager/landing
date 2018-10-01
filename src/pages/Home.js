import React from 'react';
import {withSiteData} from 'react-static';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Technologies from '../components/Technologies';
import CtaBox from '../components/CtaBox';

/**
 * Renders Home component
 * @returns {JSX}
 */
const Home = () => (
    <Layout>
        <Hero />

        <Features />

        <Technologies />

        <CtaBox />
    </Layout>
);

export default withSiteData(Home);
