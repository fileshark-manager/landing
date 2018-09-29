import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Renders Technology component
 * @param {Object}
 * @returns {JSX}
 */
const Technology = ({
    Icon,
    title,
    description
}) => (
    <div className="Technology">
        <div className="Technology__icon">
            <Icon />
        </div>

        <div className="Technology__content">
            <div className="Technology__title">
                <h4>{title}</h4>
            </div>

            <div className="Technology__description">
                {description}
            </div>
        </div>
    </div>
);

Technology.propTypes = {
    Icon: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string
};

export default Technology;
