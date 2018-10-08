import React, {Component} from 'react';
import Slider from 'react-slick';
import Classnames from 'classnames';
import steps from '../../data/steps';
import './index.scss';

const sliderSettings = {
    adaptiveHeight: true,
    fade: true,
    infinite: false,
    swipeToSlide: false,
    swipe: false
};

/**
 * Creates a new Steps class
 */
class Steps extends Component {
    /**
     * Constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0
        };
    }

    /**
     * Changes current slide
     * @param {Number} currentSlide
     */
    onChange(currentSlide = 0) {
        this.slider.slickGoTo(currentSlide);

        this.setState({currentSlide});
    }

    /**
     * Renders component
     * @returns {JSX}
     */
    render() {
        const {currentSlide = 0} = this.state;

        return (
            <section className="Steps">
                <div className="Steps__wrapper">
                    <div className="Steps__header">
                        <div className="Steps__title">
                            <h2>Steps</h2>
                        </div>
                    </div>

                    <div className="Steps__content">
                        <div className="Steps__graphics">
                            <Slider
                                {...sliderSettings}
                                ref={(slider) => (this.slider = slider)}>
                                {
                                    steps.map((step, idx) => {
                                        const {image = '', title = ''} = step;

                                        return (
                                            <div key={idx} className="Steps__graphicsItem">
                                                <img src={image} alt={title} className="Steps__graphicsImage" />
                                            </div>
                                        );
                                    })
                                }
                            </Slider>
                        </div>

                        <div className="Steps__nav">
                            <ul className="Steps__navList">
                                {
                                    steps.map((step, idx) => {
                                        const {title = '', description = ''} = step;
                                        const itemClass = Classnames({
                                            Steps__navItem: true,
                                            Steps__navItem_active: currentSlide === idx
                                        });

                                        return (
                                            <li key={idx} className={itemClass}>
                                                <button type="button" className="Steps__navButton" onClick={() => this.onChange(idx)}>
                                                    <div className="Steps__navTitle">
                                                        <h3>{title}</h3>
                                                    </div>

                                                    <div className="Steps__navDescription">{description}</div>
                                                </button>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Steps;
