import FilsonProMediumOtf from './files/FilsonProMedium.otf';
import FilsonProMediumWoff from './files/FilsonProMedium.woff';
import FilsonProMediumWoff2 from './files/FilsonProMedium.woff2';

export const name = {
  regular: 'Filson Pro',
};

export const preloadFonts = [
  {
    key: 'filson-pro',
    src: FilsonProMediumOtf,
    type: 'font/otf',
  },
];

export const family = [
  {
    fontFamily: name.regular,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: '500',
    src: `url(${FilsonProMediumOtf}) format("otf"), url(${FilsonProMediumWoff2}) format("woff2), url(${FilsonProMediumWoff}) format(woff)`,
  },
];
