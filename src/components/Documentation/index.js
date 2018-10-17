import React from 'react';
import DocumentationSection from '../DocumentationSection';
import DocumentationCode from '../DocumentationCode';
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
                    <div className="Documentation__title">
                        <h2>Documentation</h2>
                    </div>

                    <div className="Documentation__content">
                        <ul className="Documentation__list">
                            <li className="Documentation__item">
                                <a href="#getting-started">
                                    <h4>Getting Started</h4>
                                </a>
                            </li>

                            <li className="Documentation__item">
                                <a href="#setup">
                                    <h4>Setup</h4>
                                </a>
                            </li>

                            <li className="Documentation__item">
                                <a href="#usage">
                                    <h4>Usage</h4>
                                </a>
                            </li>

                            <li className="Documentation__item">
                                <a href="#server">
                                    <h4>Server</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="Documentation__main">
                    <DocumentationSection id="getting-started">
                        <h1>Getting Started</h1>

                        <p>To start using «File.Shark» media manager it is necessary to do the next things:</p>

                        <ul>
                            <li>download archive with files</li>
                            <li>include all required assets</li>
                            <li>initialize «File.Shark» media manager</li>
                            <li>configure the server to work with media manager</li>
                        </ul>
                    </DocumentationSection>

                    <DocumentationSection id="setup">
                        <h1>Setup</h1>

                        <p>Include the <strong>main.js</strong> file into your page. You can find this file in the archive, in the <strong>js</strong> folder.</p>

                        <DocumentationCode language="html">{'<script src="/js/main.js"></script>'}</DocumentationCode>
                    </DocumentationSection>
                </div>
            </div>
        </div>
    </section>
);

export default Documentation;
