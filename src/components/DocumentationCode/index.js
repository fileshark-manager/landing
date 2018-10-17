import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {tomorrowNight} from 'react-syntax-highlighter/styles/hljs';
import './index.scss';

/**
 * Renders DocumentationCode component
 * @param {Object}
 * @returns {JSX}
 */
const DocumentationCode = ({
    children,
    language
}) => (
    <SyntaxHighlighter
        className="DocumentationCode"
        language={language}
        style={tomorrowNight}>
        {children}
    </SyntaxHighlighter>
);

DocumentationCode.propTypes = {
    children: PropTypes.node,
    language: PropTypes.string
};

DocumentationCode.defaultProps = {
    language: 'javascript'
};

export default DocumentationCode;
