import React from 'react';
import {withSiteData} from 'react-static';
import flow from 'lodash/flow';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Technologies from '../components/Technologies';
import Steps from '../components/Steps';
import Reviews from '../components/Reviews';
import RoadMap from '../components/RoadMap';
import CtaBox from '../components/CtaBox';
import TrackedComponent from '../HOC/TrackedComponent';

/**
 * Renders Home component
 * @returns {JSX}
 */
const Home = () => (
    <Layout>
        <Hero />

        <Features />

        <Technologies />

        <Steps />

        <Reviews />

        <RoadMap />

        <CtaBox />
    </Layout>
);

export default flow(
    TrackedComponent,
    withSiteData
)(Home);
