import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import flow from 'lodash/flow';
import {withStateHandlers} from 'recompose';
import './index.scss';

/**
 * Renders Burger component
 * @param {Object}
 * @returns {JSX}
 */
const Burger = ({
    isExpanded,
    onToggle
}) => {
    const componentClass = Classnames({
        Burger: true,
        Burger_isExpanded: isExpanded
    });

    return (
        <div className={componentClass}>
            <button type="button" className="Burger__wrapper" onClick={onToggle}>
                <div className="Burger__line" />

                <div className="Burger__line" />

                <div className="Burger__line" />
            </button>
        </div>
    );
};

Burger.propTypes = {
    isExpanded: PropTypes.bool,
    onToggle: PropTypes.func
};

export default flow(
    withStateHandlers(
        () => ({
            isExpanded: false
        }),
        {
            onToggle: (state) => () => ({
                isExpanded: !state.isExpanded
            })
        }
    )
)(Burger);
