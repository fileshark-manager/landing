import React, {Component} from 'react';
import Slider from 'react-slick';
import Classnames from 'classnames';
import Button from '../Button';
import Pagination from '../Pagination';
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

        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            currentSlide: 0
        };
    }

    /**
     * Navigates to next slide
     */
    onNext() {
        const {currentSlide = 0} = this.state;
        const newSlide = currentSlide + 1;

        this.slider.slickGoTo(newSlide);

        this.setState({currentSlide: newSlide});
    }

    /**
     * Navigates to prev slide
     */
    onPrev() {
        const {currentSlide = 0} = this.state;
        const newSlide = currentSlide - 1;

        this.slider.slickGoTo(newSlide);

        this.setState({currentSlide: newSlide});
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
                                        const {image = '', title = '', description = ''} = step;

                                        return (
                                            <div key={idx} className="Steps__graphicsItem">
                                                <img src={image} alt={title} className="Steps__graphicsImage" />

                                                <div className="Steps__navTitle">
                                                    <h3>{`${idx + 1}. ${title}`}</h3>
                                                </div>

                                                <div className="Steps__navDescription">{description}</div>
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

                            <div className="Steps__cta">
                                <Button
                                    theme="alert"
                                    size="medium"
                                    text="Buy" />
                            </div>
                        </div>
                    </div>

                    <div className="Steps__footer">
                        <Pagination
                            current={currentSlide + 1}
                            total={steps.length}
                            onPrev={this.onPrev}
                            onNext={this.onNext} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Steps;
