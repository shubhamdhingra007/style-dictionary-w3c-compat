import StyleDictionary from 'style-dictionary-utils';

StyleDictionary.registerTransform({
    name: 'test/transformer',
    type: `value`,
    transitive: true,
    transformer: ({ value, ...args }) => {
        console.log('value >>', value)
        console.log('---------')
        console.log('args >>', args)
        console.log('---------')
        return value
    }
})

const buildPathPrefix = 'dist/'

const config = {
    source: ["tokens/**/*.json"],
    platforms: {
        css: {
            buildPath: buildPathPrefix,
            transforms: ["attribute/cti", "name/cti/kebab", "dimension/pixelToRem", "color/rgba", "test/transformer",
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
            transforms: ["attribute/cti", "name/cti/pascal", "dimension/pixelToRem", "color/rgba",],
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
            transforms: ["attribute/cti", "name/cti/kebab", "dimension/pixelToRem", "color/rgba",
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