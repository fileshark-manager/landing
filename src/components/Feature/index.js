import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders Feature component
 * @param {Object}
 * @returns {JSX}
 */
const Feature = ({
    Icon,
    title,
    description
}) => (
    <div className="Feature" />
);

Feature.propTypes = {
    Icon: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string
};

export default Feature;
