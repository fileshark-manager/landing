import React from 'react';
import Technology from '../Technology';
import technologies from '../../data/technologies';
import './index.scss';

/**
 * Renders Technologies component
 * @returns {JSX}
 */
const Technologies = () => (
    <section className="Technologies">
        <div className="Technologies__wrapper">
            <div className="Technologies__header">
                <h2>Our technologies</h2>
            </div>

            <div className="Technologies__content">
                <ul className="Technologies__list">
                    {
                        technologies.map((technology, idx) => <li key={idx} className="Technologies__item"><Technology {...technology} /></li>)
                    }
                </ul>
            </div>
        </div>
    </section>
);

export default Technologies;
