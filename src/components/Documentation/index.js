import React from 'react';
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

                    Aside
                </div>

                <div className="Documentation__main">
                    Main
                </div>
            </div>
        </div>
    </section>
);

export default Documentation;
