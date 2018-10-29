import React from 'react';
import PropTypes from 'prop-types';
import {Head} from 'react-static';
import faviconApple from '../../assets/images/favicon/apple-touch-icon.png';
import faviconBig from '../../assets/images/favicon/favicon-32x32.png';
import faviconSmall from '../../assets/images/favicon/favicon-16x16.png';
import faviconSafari from '../../assets/images/favicon/safari-pinned-tab.svg';
import faviconIco from '../../assets/images/favicon/favicon.ico';

/**
 * Renders HeadContainer component
 * @param {Object}
 * @returns {JSX}
 */
const HeadContainer = ({
    title,
    metaDescription,
    metaKeywords,
}) => (
    <Head>
        <meta name="Description" content={metaDescription} />
        <meta name="Keywords" content={metaKeywords} />
        <meta name="yandex-verification" content="f7b9309755c878c7" />

        <title>{title}</title>

        <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
        <link rel="icon" type="image/png" sizes="32x32" href={faviconBig} />
        <link rel="icon" type="image/png" sizes="16x16" href={faviconSmall} />
        <link rel="manifest" href="/static/images/favicon/site.webmanifest" />
        <link rel="mask-icon" href={faviconSafari} color="#5bbad5" />
        <link rel="shortcut icon" href={faviconIco} />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/static/images/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#FFFFFF" />
    </Head>
);

HeadContainer.propTypes = {
    title: PropTypes.string,
    metaDescription: PropTypes.string,
    metaKeywords: PropTypes.string
};

export default HeadContainer;
