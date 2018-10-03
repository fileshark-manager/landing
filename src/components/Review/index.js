import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Renders Review component
 * @param {Object}
 * @returns {JSX}
 */
const Review = ({
    preview,
    title,
    description,
    logo,
    name
}) => (
    <div className="Review">
        <div className="Review__wrapper">
            <div className="Review__data">
                <div className="Review__title">
                    <h2>{title}</h2>
                </div>

                <div className="Review__description">
                    «
                    {description}
                    »
                </div>

                <div className="Review__logo">
                    <img src={logo} alt={name} />
                </div>
            </div>

            <div className="Review__graphics">
                <img src={preview} alt={name} />
            </div>
        </div>
    </div>
);

Review.propTypes = {
    preview: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    logo: PropTypes.string,
    name: PropTypes.string
};

export default Review;
