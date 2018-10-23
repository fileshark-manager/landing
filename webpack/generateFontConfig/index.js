const path = require('path');

/**
 * Generates config for font
 * @param {Object} props
 * @return {Array}
 */
const generateConfig = (props = {}) => {
    const {font = {}, PATHS = {}, stage = 'dev'} = props;
    const {name = '', styles = []} = font;

    return styles.map((style) => (
        {
            test: /\.(woff|woff2|ttf|eot|svg)$/,
            include: [
                path.join(PATHS.source, 'assets', 'fonts', name, style)
            ],
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: `fonts/${name}/${style}/`,
                        useRelativePath: false,
                        publicPath: (stage === 'prod')
                            ? `/landing/fonts/${name}/${style}/`
                            : `/fonts/${name}/${style}/`
                    }
                }
            ]
        }
    ));
};

/**
 * Generate webpack config for fonts
 * @param {Object} props
 * @return {Array}
 */
const generateFontConfig = (props = {}) => {
    const {PATHS = {}, FONTS = [], stage = 'dev', generate = generateConfig} = props;
    let config = [];

    FONTS.forEach((font) => {
        const fontConfig = generate({font, PATHS, stage});

        config = [
            ...config,
            ...fontConfig
        ];
    });

    return config;
};

exports.generateConfig = generateConfig;
exports.generateFontConfig = generateFontConfig;
