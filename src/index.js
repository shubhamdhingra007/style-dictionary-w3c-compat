import StyleDictionary from 'style-dictionary-utils';

const buildPathPrefix = 'dist/'

const config = {
    source: ["tokens/**/*.json"],
    platforms: {
        css: {
            buildPath: buildPathPrefix,
            transforms: ["attribute/cti", "name/cti/kebab", "dimension/pixelToRem", "color/rgb",
                "font/css", // needed for typography composite token
                "shadow/css", // needed for shadow composite token
                "border/css", // needed for border composite token
                "gradient/css", // needed for gradient composite token
            ],
            files: [
                {
                    format: 'css/variables',
                    destination: 'variables.css',
                    options: {
                        outputReferences: true,
                        basePxFontSize: 40
                    }
                },
                {
                    format: 'scss/variables',
                    destination: 'variables.scss',
                    options: {
                        outputReferences: true,
                        basePxFontSize: 40
                    }
                }
            ]
        },
        js: {
            buildPath: buildPathPrefix,
            transforms: ["attribute/cti", "name/cti/pascal", "dimension/pixelToRem", "color/rgb",],
            files: [
                {
                    format: 'javascript/es6',
                    destination: 'variables.js',
                    options: {
                        outputReferences: true,
                        basePxFontSize: 40
                    }
                },
                {
                    format: 'javascript/es6',
                    destination: 'variables.ts',
                    options: {
                        outputReferences: true,
                        basePxFontSize: 40
                    }
                }
            ]
        },
        less: {
            buildPath: buildPathPrefix,
            transforms: ["attribute/cti", "name/cti/kebab", "dimension/pixelToRem", "color/rgb",
                "font/css", // needed for typography composite token
                "shadow/css", // needed for shadow composite token
                "border/css", // needed for border composite token
                "gradient/css", // needed for gradient composite token
            ],
            files: [
                {
                    format: 'less/variables',
                    destination: 'variables.less',
                    options: {
                        outputReferences: true,
                        basePxFontSize: 40
                    }
                },
            ]
        },
    }
}

const sd = StyleDictionary.extend(config);
sd.buildAllPlatforms();