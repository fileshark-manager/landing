import config from '../../config';

const {contactLink = ''} = config;

export default [
    {
        title: 'Contact us',
        url: contactLink
    },
    {
        title: 'Documentation',
        url: '/documentation'
    }
];
