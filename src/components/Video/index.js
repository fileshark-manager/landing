import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders Video component
 * @param {Object}
 * @returns {JSX}
 */
const Video = ({
    source,
    poster,
    fallback
}) => (
    <div className="Video">
        <video width="100%" height="100%" poster={poster} autoPlay loop muted>
            {
                source.map((sourceItem, idx) => <source key={idx} src={sourceItem.src} type={sourceItem.type} />)
            }

            <img src={fallback} alt="media manager video" />
        </video>
    </div>
);

Video.propTypes = {
    source: PropTypes.array,
    poster: PropTypes.string,
    fallback: PropTypes.string
};

Video.defaultProps = {
    source: []
};

export default Video;
