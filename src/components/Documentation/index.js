import React from 'react';
import {Link} from 'react-static';
import Data from './modules/Data';
import './index.scss';

/**
 * Renders Documentation component
 * @returns {JSX}
 */
const Documentation = () => (
    <section className="Documentation">
        <div className="Documentation__wrapper">
            <div className="Documentation__content">
                <div className="Documentation__aside">
                    <div className="Documentation__panel">
                        <div className="Documentation__title">
                            <h2>Documentation</h2>
                        </div>

                        <div className="Documentation__content">
                            <ul className="Documentation__list">
                                <li className="Documentation__item">
                                    <Link to="#getting-started" className="Documentation__link">
                                        <h4>Getting Started</h4>
                                    </Link>
                                </li>

                                <li className="Documentation__item">
                                    <Link to="#setup">
                                        <h4>Setup</h4>
                                    </Link>
                                </li>

                                <li className="Documentation__item">
                                    <Link to="#usage">
                                        <h4>Usage</h4>
                                    </Link>
                                </li>

                                <li className="Documentation__item">
                                    <Link to="#server">
                                        <h4>Server</h4>
                                    </Link>
                                </li>

                                <li className="Documentation__item">
                                    <Link to="#browsers-support">
                                        <h4>Browsers support</h4>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="Documentation__main">
                    <Data />
                </div>
            </div>
        </div>
    </section>
);

export default Documentation;
