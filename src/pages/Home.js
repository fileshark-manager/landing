import React from 'react';
import {withSiteData} from 'react-static';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Technologies from '../components/Technologies';
import Reviews from '../components/Reviews';
import RoadMap from '../components/RoadMap';
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

        <Reviews />

        <RoadMap />

        <CtaBox />
    </Layout>
);

export default withSiteData(Home);
