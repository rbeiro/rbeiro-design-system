import {
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
  shadows,
  transitions,
  zIndices
} from "@rbeiro-ui/tokens";

import { createStitches, defaultThemeMap } from "@stitches/react";
//
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
  
  media: {
    bp640: '(min-width: 640px)',
    bp768: '(min-width: 768px)',
    bp1024: '(min-width: 1024px)',
  },
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
    shadows,
    transitions,
    zIndices,
  },
});