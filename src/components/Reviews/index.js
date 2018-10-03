import React, {Component} from 'react';
import Slider from 'react-slick';
import Review from '../Review';
import reviews from '../../data/reviews';
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

        this.slider = React.createRef();
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
     * Renders component
     * @returns {JSX}
     */
    render() {
        return (
            <section className="Reviews">
                <div className="Reviews__wrapper">
                    <div className="Reviews__content">
                        <Slider {...sliderSettings} ref={this.slider}>
                            {
                                reviews.map((review, idx) => <div key={idx}><Review {...review} /></div>)
                            }
                        </Slider>

                        <div className="Reviews__nav" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Reviews;
