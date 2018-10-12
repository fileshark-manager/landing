import React from 'react';
import {Link} from 'react-static';
import links from '../../data/footerNavigation';
import './index.scss';

/**
 * Renders Footer component
 */
const Footer = () => (
    <footer className="Footer">
        <div className="Footer__wrapper">
            <div className="Footer__copy">
                &copy; 2018 «File.Shark»
            </div>

            <div className="Footer__nav">
                <ul className="Footer__list">
                    {
                        links.map((link, idx) => {
                            const {title = '', url = ''} = link;

                            return (
                                <li key={idx} className="Footer__item">
                                    <Link to={url} className="Footer__link">{title}</Link>
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
