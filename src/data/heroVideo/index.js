import poster from '../../assets/images/vis-poster.jpg';
import fallback from '../../assets/images/vis-fallback.jpg';
import videoMP4 from '../../assets/video/hero.mp4';
import videoOGG from '../../assets/video/hero.ogv';
import videoWEBM from '../../assets/video/hero.webm';

export default {
    poster,
    fallback,
    source: [
        {
            src: videoMP4,
            type: 'video/mp4'
        },
        {
            src: videoOGG,
            type: 'video/ogg'
        },
        {
            src: videoWEBM,
            type: 'video/webm'
        }
    ]
};
