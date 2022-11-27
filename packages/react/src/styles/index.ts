import {
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from "@rbeiro-ui/tokens";

import { createStitches, defaultThemeMap } from "@stitches/react";

// import themes from "@rbeiro-ui/tokens/themes";
// const themesColors = Object.entries(themes).reduce((acc, [key, theme]) => {
//   return {
//     ...acc,
//     ...theme.colors,
//   };
// }, {});

// const themesFonts = Object.entries(themes).reduce((acc, [key, theme]) => {
//   return {
//     ...acc,
//     ...theme.fonts,
//   };
// }, {});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },

  theme: {
    fonts: {
      ...fonts,
    },
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
});
