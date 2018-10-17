import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Renders DocumentationInfo component
 * @param {Object}
 * @returns {JSX}
 */
const DocumentationInfo = ({
    title,
    type,
    description
}) => (
    <div className="DocumentationInfo">
        <div className="DocumentationInfo__header">{title}</div>

        <div className="DocumentationInfo__content">
            {type && (
                <div className="DocumentationInfo__item">
                    Type:
                    {' '}
                    {type}
                </div>
            )}

            {description && (
                <div className="DocumentationInfo__item">
                    Description:
                    {' '}
                    {description}
                </div>
            )}
        </div>
    </div>
);

DocumentationInfo.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string
};

export default DocumentationInfo;
