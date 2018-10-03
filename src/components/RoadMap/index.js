import React from 'react';
import RoadMapItem from '../RoadMapItem';
import data from '../../data/roadmap';
import './index.scss';

/**
 * Renders RoadMap component
 * @returns {JSX}
 */
const RoadMap = () => (
    <section className="RoadMap">
        <div className="RoadMap__wrapper">
            <div className="RoadMap__header">
                <div className="RoadMap__title">
                    <h2>Road map</h2>
                </div>
            </div>

            <div className="RoadMap__content">
                <ul className="RoadMap__list">
                    {
                        data.map((dataItem, idx) => <li key={idx} className="RoadMap__item"><RoadMapItem {...dataItem} /></li>)
                    }
                </ul>
            </div>
        </div>
    </section>
);

export default RoadMap;
