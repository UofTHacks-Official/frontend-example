import FilsonProMediumOtf from './stitches/fonts/FilsonProMedium.otf';
import FilsonProMediumWoff from './stitches/fonts/FilsonProMedium.woff';
import FilsonProMediumWoff2 from './stitches/fonts/FilsonProMedium.woff2';

import { createStitches } from '@stitches/react';

import { fontSizes, utils, colors, breakpoints, spaces } from './stitches';

const systemFont = `
system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
`;

const fonts = {
  filsonPro: {
    name: 'Filson Pro',
    family: [
      {
        fontFamily: 'Filson Pro',
        fontStyle: 'normal',
        fontDisplay: 'swap',
        fontWeight: '500',
        src: `url(${FilsonProMediumOtf}), url(${FilsonProMediumWoff2}), url(${FilsonProMediumWoff})`,
      },
    ],
  },
};

export const { config, createTheme, css, globalCss, styled, theme, keyframes } =
  createStitches({
    theme: {
      colors,
      fonts: {
        system: systemFont,
        filsonPro: `${fonts.filsonPro.name}, ${systemFont}`,
      },
      fontSizes,
    },
  });

export const darkTheme = createTheme('dark', {});

export const globalStyles = globalCss({
  '@font-face': [...fonts.filsonPro.family],
  'html, body': {
    fontFamily: fonts.filsonPro.name,
    color: '$primary-text',
    margin: 0,
    padding: 0,
  },
});
