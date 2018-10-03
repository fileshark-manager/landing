import React, {Component} from 'react';
import Slider from 'react-slick';
import Review from '../Review';
import reviews from '../../data/reviews';
import Pagination from '../Pagination';
import './index.scss';

const sliderSettings = {
    adaptiveHeight: true,
    fade: true,
    infinite: false
};

/**
 * Creates a new Reviews class
 */
class Reviews extends Component {
    /**
     * Constructor
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            currentSlide: 1
        };
    }

    /**
     * Navigates to next slide
     */
    onNext() {
        this.slider.slickNext();
    }

    /**
     * Navigates to prev slide
     */
    onPrev() {
        this.slider.slickPrev();
    }

    /**
     * Handles change event
     * @param {Number} current
     * @param {Number} next
     */
    onChange(current, next = 0) {
        const currentSlide = next + 1;

        this.setState({currentSlide});
    }

    /**
     * Renders component
     * @returns {JSX}
     */
    render() {
        const {currentSlide = 0} = this.state;

        return (
            <section className="Reviews">
                <div className="Reviews__wrapper">
                    <div className="Reviews__content">
                        <Slider
                            {...sliderSettings}
                            beforeChange={this.onChange}
                            ref={(slider) => (this.slider = slider)}>
                            {
                                reviews.map((review, idx) => <div key={idx}><Review {...review} /></div>)
                            }
                        </Slider>

                        <div className="Reviews__nav">
                            <Pagination
                                current={currentSlide}
                                total={reviews.length}
                                onPrev={this.onPrev}
                                onNext={this.onNext} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Reviews;
