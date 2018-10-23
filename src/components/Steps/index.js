import React, {Component} from 'react';
import Slider from 'react-slick';
import Classnames from 'classnames';
import Button from '../Button';
import Pagination from '../Pagination';
import steps from '../../data/steps';
import config from '../../config';
import './index.scss';

const {purchaseLink = ''} = config;

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
        this.onAfterChange = this.onAfterChange.bind(this);

        this.state = {
            currentSlide: 0,
            sliding: false
        };
    }

    /**
     * Navigates to next slide
     */
    onNext() {
        const {currentSlide = 0, sliding = false} = this.state;

        if (sliding) {
            return;
        }

        const newSlide = currentSlide + 1;

        this.slider.slickGoTo(newSlide);

        this.setState({currentSlide: newSlide, sliding: true});
    }

    /**
     * Navigates to prev slide
     */
    onPrev() {
        const {currentSlide = 0, sliding = false} = this.state;

        if (sliding) {
            return;
        }

        const newSlide = currentSlide - 1;

        this.slider.slickGoTo(newSlide);

        this.setState({currentSlide: newSlide, sliding: true});
    }

    /**
     * Changes current slide
     * @param {Number} currentSlide
     */
    onChange(currentSlide = 0) {
        const {sliding = false} = this.state;

        if (currentSlide === this.state.currentSlide) {
            return;
        }

        if (sliding) {
            return;
        }

        this.slider.slickGoTo(currentSlide);

        this.setState({currentSlide, sliding: true});
    }

    /**
     * Handles afterChange event
     */
    onAfterChange() {
        this.setState({sliding: false});
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
                                afterChange={this.onAfterChange}
                                ref={(slider) => (this.slider = slider)}>
                                {
                                    steps.map((step, idx) => {
                                        const {image = '', title = '', description = ''} = step;
                                        const itemClass = Classnames({
                                            Steps__graphicsItem: true,
                                            Steps__graphicsItem_active: currentSlide === idx
                                        });

                                        return (
                                            <div key={idx} className={itemClass}>
                                                <img src={image} alt={title} className="Steps__graphicsImage" />

                                                <div className="Steps__navTitle">
                                                    <h3>{`${idx + 1}. ${title}`}</h3>
                                                </div>

                                                <div className="Steps__navDescription" dangerouslySetInnerHTML={{__html: description}} />
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

                                                    <div className="Steps__navDescription" dangerouslySetInnerHTML={{__html: description}} />
                                                </button>
                                            </li>
                                        );
                                    })
                                }
                            </ul>

                            <div className="Steps__cta">
                                <Button
                                    href={purchaseLink}
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

                <div className="Steps__border">
                    <svg version="1.1" viewBox="0 0 1920 226">
                        <path
                            fill="#FFFFFF"
                            d="M0,89c281.237,67.967,606.978,101.949,977.218,101.949
                    c370.241,0,684.502-63.596,942.782-190.788V226H0V89z M0,89c281.237,67.967,606.978,101.949,977.218,101.949
                    c370.241,0,684.502-63.596,942.782-190.788V226H0V89z" />
                    </svg>
                </div>
            </section>
        );
    }
}

export default Steps;
