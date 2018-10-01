import React from 'react';
import Button from '../Button';
import Logo from '../Logo';
import Burger from '../Burger';
import links from '../../data/headerNavigation';
import './index.scss';

/**
 * Renders Header component
 * @returns {JSX}
 */
const Header = () => (
    <header className="Header">
        <div className="Header__container">
            <div className="Header__wrapper">
                <div className="Header__logo">
                    <Logo />
                </div>

                <div className="Header__content">
                    <div className="Header__nav">
                        <ul className="Header__list">
                            {
                                links.map((link, idx) => {
                                    const {title = '', url = ''} = link;

                                    return (
                                        <li key={idx} className="Header__item">
                                            <a href={url} className="Header__link">{title}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="Header__cta">
                        <Button
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
