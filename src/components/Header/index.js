import React from 'react';
import {Link} from 'react-static';
import Button from '../Button';
import Logo from '../Logo';
import Burger from '../Burger';
import links from '../../data/headerNavigation';
import config from '../../config';
import './index.scss';

const {purchaseLink = ''} = config;

/**
 * Renders Header component
 * @returns {JSX}
 */
const Header = () => (
    <header className="Header">
        <div className="Header__container">
            <div className="Header__wrapper">
                <div className="Header__logo">
                    <Link exact to="/">
                        <Logo />
                    </Link>
                </div>

                <div className="Header__content">
                    <div className="Header__nav">
                        <ul className="Header__list">
                            {
                                links.map((link, idx) => {
                                    const {title = '', url = ''} = link;

                                    return (
                                        <li key={idx} className="Header__item">
                                            <Link to={url} className="Header__link">{title}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="Header__cta">
                        <Button
                            href={purchaseLink}
                            text="Buy"
                            size="small" />
                    </div>

                    <div className="Header__burger">
                        <Burger />
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
