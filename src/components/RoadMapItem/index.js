import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import config from '../../config';
import './index.scss';

const {contactLink = ''} = config;

/**
 * Renders RoadMapItem component
 * @param {Object}
 * @returns {JSX}
 */
const RoadMapItem = ({
    Icon,
    title,
    description,
    isDefault
}) => {
    const componentClass = Classnames({
        RoadMapItem: true,
        RoadMapItem_default: isDefault
    });

    return (
        <div className={componentClass}>
            <div className="RoadMapItem__wrapper">
                <div className="RoadMapItem__header">
                    <div className="RoadMapItem__icon">
                        <Icon />
                    </div>
                </div>

                <div className="RoadMapItem__content">
                    {!isDefault && (
                        <div className="RoadMapItem__title">
                            <h5>{title}</h5>
                        </div>
                    )}

                    <div className="RoadMapItem__description">{description}</div>
                </div>

                {isDefault && (
                    <div className="RoadMapItem__footer">
                        <a href={contactLink} className="RoadMapItem__link">Write suggest</a>
                    </div>
                )}
            </div>
        </div>
    );
};

RoadMapItem.propTypes = {
    Icon: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string,
    isDefault: PropTypes.bool
};

RoadMapItem.defaultProps = {
    isDefault: false
};

export default RoadMapItem;
