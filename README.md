# SPIKE: Style dictionary W3C draft compat

Repository to create and transform Design tokens validating style dictionary compatibility with [W3C draft](https://design-tokens.github.io/community-group/format). To achieve this, `style-dictionary-utils` is employed.

`tokens` folder includes all types of tokens(simple and composite) along with aliasing. The repo. generates tokens in these formats: JS/TS, CSS, SCSS, LESS under the `dist` folder.

## Build tokens

```sh
npm i
npm run build
```

## Findings

The package `style-dictionary-utils` does it job well, but it has short-comings:

| Criteria | Impact | Issue & Comments |
| -- | -- | -- |
| Token  type validation | ![low](https://img.shields.io/badge/low-green) | The package doesn't validate if a type has been assigned or if a valid type has been assigned or not as per the requirements of the [draft](https://design-tokens.github.io/community-group/format/#types:~:text=If%20no%20explicit%20type%20has%20been%20set%20for%20a%20token%2C%20tools%20MUST%20consider%20the%20token%20invalid%20and%20not%20attempt%20to%20infer%20any%20other%20type%20from%20the%20value); but that's far from a show stopper. |
| Parent/Group level type inference | ![low](https://img.shields.io/badge/low-green) | The package looks for the type of a single token and doesn't bother about any type defined at upper level. Again this is not show stopper, we just need to be careful while creating token files. |
| Composite tokens LESS transforms | ![low](https://img.shields.io/badge/low-green) | There are no LESS transformers available for the composite tokens. It does look like a show stopper but it isn't as of now. The CSS transforms applied work equally well because of the simplicity of the [transforms](https://github.com/lukasoppermann/style-dictionary-utils/blob/main/src/transformer/font-css.ts). They just look for the object and does their job. Guess their transform names are incorrect/not well thought of. |
| Composite token type "transition" | ![low](https://img.shields.io/badge/low-green) to ![none](https://img.shields.io/badge/none-white) | No transform present in the package for this. Although not present but creating a self transform is easy and is included in this spike. We can also raise a PR to the style-dictionary-utils for this to have it in the source itself. |
| Composite token type "strokeStyle" | ![medium](https://img.shields.io/badge/medium-yellow) to ![low](https://img.shields.io/badge/low-green) | The DTCG [strokeStyle](https://design-tokens.github.io/community-group/format/#stroke-style) type can have either string or object values but the package does not offer any transform for this. From a quick check in SWAN token JSONs, there didn't seemed to be a token which has this, so it is not an issue for now. |
| Composite token type "border" | ![medium](https://img.shields.io/badge/medium-yellow) to ![low](https://img.shields.io/badge/low-green) | The DTCG border [style](https://design-tokens.github.io/community-group/format/#border:~:text=a%20dimension%20token.-,style%3A,-The%20border%27s%20style) attribute can have either string or object values but the package [supports](https://github.com/lukasoppermann/style-dictionary-utils/blob/main/src/transformer/border-css.ts#L27) only string value. From a quick check in SWAN token JSONs, there didn't seemed to be a token which has complex border style, so it is not an issue for now. |

> If a transform is not present, it will print [object Object] in the output. Works for JS/TS as everything compiles to an object for any of the composite token.

---
