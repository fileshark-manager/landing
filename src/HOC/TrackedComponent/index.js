import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

/**
 * Renders TrackedComponent HOC
 * @param {Function} ComposedComponent
 * @returns {Tracked} class
 */
const TrackedComponent = (ComposedComponent) => {
    /**
     * Creates a new Tracked class
     */
    class Tracked extends Component {
        /**
         * Handles componentDidMount event
         */
        componentWillMount() {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }

        /**
         * Renders component
         * @returns {JSX}
         */
        render() {
            return <ComposedComponent {...this.state} {...this.props} />;
        }
    }

    return Tracked;
};

TrackedComponent.propTypes = {
    component: PropTypes.func
};

export default TrackedComponent;
