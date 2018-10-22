import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Renders DocumentationTable component
 * @param {Object}
 * @returns {JSX}
 */
const DocumentationTable = ({
    children
}) => (
    <div className="DocumentationTable">
        <table className="DocumentationTable__table">
            <tbody>
                {children}
            </tbody>
        </table>
    </div>
);

DocumentationTable.propTypes = {
    children: PropTypes.node
};

export default DocumentationTable;
