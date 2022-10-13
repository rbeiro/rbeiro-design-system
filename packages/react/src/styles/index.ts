import {
  fontSizes,
  fontWeights,
  baseColors,
  fonts,
  lineHeights,
  radii,
  space,
} from "@rbeiro-ui/tokens";

import themes from "@rbeiro-ui/tokens/themes";
import { createStitches, defaultThemeMap } from "@stitches/react";

const themesColors = Object.entries(themes).reduce((acc, [key, theme]) => {
  return {
    ...acc,
    ...theme.colors,
  };
}, {});

const themesFonts = Object.entries(themes).reduce((acc, [key, theme]) => {
  return {
    ...acc,
    ...theme.fonts,
  };
}, {});

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
    colors: {
      ...baseColors,
      ...themesColors,
    },
    fonts: {
      ...fonts,
      ...themesFonts,
    },
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
});
