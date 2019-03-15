import React from 'react';
import Button from '../Button';
import config from '../../config';
import './index.scss';

const {purchaseLink = ''} = config;

/**
 * Renders CtaBox component
 * @returns {JSX}
 */
const CtaBox = () => (
    <section className="CtaBox">
        <div className="CtaBox__wrapper">
            <div className="CtaBox__header">
                <h2>Media manager for your CMS</h2>
            </div>

            <div className="CtaBox__content">
                <Button
                    href={purchaseLink}
                    target="_blank"
                    text="Buy"
                    size="medium" />
            </div>
        </div>
    </section>
);

export default CtaBox;
