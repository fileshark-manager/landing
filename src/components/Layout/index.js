import React from 'react';
import PropTypes from 'prop-types';
import Main from '../Main';
import Footer from '../Footer';

/**
 * Renders Layout component
 * @param {Object}
 * @returns {JSX}
 */
const Layout = ({
    children
}) => (
    <div className="Layout">
        <div className="Layout__header">

        </div>

        <div className="Layout__main">
            <Main>
                {children}
            </Main>
        </div>

        <div className="Layout__footer">
            <Footer />
        </div>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
