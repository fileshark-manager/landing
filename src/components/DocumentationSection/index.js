import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Renders DocumentationSection component
 * @param {Object}
 * @returns {JSX}
 */
const DocumentationSection = ({
    id,
    children
}) => (
    <div className="DocumentationSection">
        <div id={id} className="DocumentationSection__anchor" />

        {children}
    </div>
);

DocumentationSection.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node
};

export default DocumentationSection;
