import React from 'react';
import GettingStarted from '../GettingStarted';
import Setup from '../Setup';
import Usage from '../Usage';
import Server from '../Server';
import BrowsersSupport from '../BrowsersSupport';

/**
 * Renders Data component
 * @returns {JSX}
 */
const Data = () => (
    <div>
        <GettingStarted />

        <Setup />

        <Usage />

        <Server />

        <BrowsersSupport />
    </div>
);

export default Data;
