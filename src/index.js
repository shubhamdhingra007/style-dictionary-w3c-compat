import StyleDictionary from 'style-dictionary-utils';

const config = {
    source: ["tokens/**/*.json"],
    platforms: {
        css: {
            buildPath: "dist/",
            // transformGroup: 'css',
            //  "font/css"
            transforms: ["attribute/cti", "name/cti/kebab", "dimension/pixelToRem", "color/rgb",],
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
            buildPath: "dist/",
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
            buildPath: "dist/",
            // transformGroup: 'css',
            //  "font/css"
            transforms: ["attribute/cti", "name/cti/kebab", "dimension/pixelToRem", "color/rgb",],
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