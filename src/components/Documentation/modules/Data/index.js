import React from 'react';
import GettingStarted from '../GettingStarted';
import Setup from '../Setup';
import Usage from '../Usage';
import Server from '../Server';

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
    </div>
);

export default Data;
