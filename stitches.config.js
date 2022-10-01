import { createStitches } from '@stitches/react';

import {
  fonts,
  fontSizes,
  utils,
  colors,
  breakpoints,
  spaces,
} from './stitches';

const systemFont = `
system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
`;

export const { config, createTheme, css, globalCss, styled, theme, keyframes } =
  createStitches({
    theme: {
      colors,
      fonts: {
        system: systemFont,
        filsonPro: `${fonts.FilsonPro.name.regular}, ${systemFont}`,
      },
    },
  });

export const darkTheme = createTheme('dark', {});

export const globalStyles = globalCss({
  '@font-face': [...fonts.FilsonPro.family],
  'html, body': {
    fontFamily: fonts.FilsonPro.name.regular,
    margin: 0,
    padding: 0,
  },
});
