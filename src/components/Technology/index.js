import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import './index.scss';

/**
 * Renders Technology component
 * @param {Object}
 * @returns {JSX}
 */
const Technology = ({
    Icon,
    title,
    description,
    theme
}) => {
    const componentClass = Classnames({
        Technology: true,
        Technology_theme_react: theme === 'react',
        Technology_theme_redux: theme === 'redux',
        Technology_theme_styled: theme === 'styled',
    });

    return (
        <div className={componentClass}>
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
    )
};

Technology.propTypes = {
    Icon: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string,
    theme: PropTypes.string,
};

export default Technology;
