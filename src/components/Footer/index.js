import React from 'react';
import links from '../../data/footerNavigation';
import './index.scss';

/**
 * Renders Footer component
 */
const Footer = () => (
    <footer className="Footer">
        <div className="Footer__wrapper">
            <div className="Footer__copy">
                &copy; 2018 «divlab»
            </div>

            <div className="Footer__nav">
                <ul className="Footer__list">
                    {
                        links.map((link, idx) => {
                            const {title = '', url = ''} = link;

                            return (
                                <li key={idx} className="Footer__item">
                                    <a href={url} className="Footer__link">{title}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;
