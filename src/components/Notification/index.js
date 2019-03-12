import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Renders Notification component
 * @param {Object}
 * @returns {JSX}
 */
const Notification = ({
    children
}) => (
    <div className="Notification">{children}</div>
);

Notification.propTypes = {
    children: PropTypes.node
};

export default Notification;
