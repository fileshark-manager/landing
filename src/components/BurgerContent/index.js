import React from 'react';
import {Link} from 'react-static';
import Button from '../Button';
import links from '../../data/headerNavigation';
import './index.scss';

/**
 * Renders BurgerContent component
 * @returns {JSX}
 */
const BurgerContent = () => (
    <div className="BurgerContent">
        <div className="BurgerContent__wrapper">
            <div className="BurgerContent__content">
                <ul className="BurgerContent__list">
                    {
                        links.map((link, idx) => {
                            const {title = '', url = ''} = link;

                            return (
                                <li key={idx} className="BurgerContent__item">
                                    <Link to={url} className="BurgerContent__link">{title}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

            <div className="BurgerContent__footer">
                <Button
                    text="Buy"
                    size="full" />
            </div>
        </div>
    </div>
);

export default BurgerContent;
