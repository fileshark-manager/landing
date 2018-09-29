import React from 'react';
import Button from '../Button';
import './index.scss';

/**
 * Renders CtaBox component
 * @returns {JSX}
 */
const CtaBox = () => (
    <section className="CtaBox">
        <div className="CtaBox__wrapper">
            <div className="CtaBox__header">
                <h2>MediaManager for your CMS</h2>
            </div>

            <div className="CtaBox__content">
                <Button
                    href="#"
                    text="Buy"
                    size="medium" />
            </div>
        </div>
    </section>
);

export default CtaBox;
