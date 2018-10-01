import React from 'react';
import Feature from '../Feature';
import features from '../../data/features';

/**
 * Renders Features component
 * @returns {JSX}
 */
const Features = () => (
    <section className="Features">
        <div className="Features__wrapper">
            <div className="Features__header">
                <h2>All you need in one place</h2>
            </div>

            <div className="Features__content">
                <div className="Features__graphics" />

                <div className="Features__data">
                    <ul className="Features__list">
                        {
                            features.map((feature, idx) => <li key={idx} className="Features__item"><Feature {...feature} /></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default Features;
