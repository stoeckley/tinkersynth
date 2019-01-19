// @flow
import { compose } from './utils';

import { convertHSBToHSL, stringifyHSL } from './helpers/color.helpers';

// Our colors in Figma are given in HSB, which is a really intuitive way to
// understand color. Unfortunately, CSS only support HSL, which is less
// intuitive. Do the conversion here.
const prepColor = compose(
  stringifyHSL,
  convertHSBToHSL
);

export const COLORS = {
  red: {
    '300': prepColor({
      hue: 5,
      saturation: 90,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 0,
      saturation: 100,
      brightness: 85,
    }),
  },
  orange: {
    '300': prepColor({
      hue: 25,
      saturation: 90,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 27,
      saturation: 100,
      brightness: 90,
    }),
  },
  yellow: {
    '300': prepColor({
      hue: 54,
      saturation: 80,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 44,
      saturation: 100,
      brightness: 100,
    }),
  },
  green: {
    '300': prepColor({
      hue: 150,
      saturation: 80,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 160,
      saturation: 100,
      brightness: 80,
    }),
  },
  aqua: {
    '300': prepColor({
      hue: 190,
      saturation: 90,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 200,
      saturation: 85,
      brightness: 95,
    }),
    '700': prepColor({
      hue: 205,
      saturation: 75,
      brightness: 70,
    }),
  },
  blue: {
    '300': prepColor({
      hue: 241,
      saturation: 70,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 248,
      saturation: 85,
      brightness: 90,
    }),
    '700': prepColor({
      hue: 248,
      saturation: 50,
      brightness: 50,
    }),
  },
  violet: {
    '100': prepColor({
      hue: 275,
      saturation: 80,
      brightness: 100,
    }),
    '300': prepColor({
      hue: 270,
      saturation: 90,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 265,
      saturation: 90,
      brightness: 90,
    }),
  },
  pink: {
    '300': prepColor({
      hue: 300,
      saturation: 85,
      brightness: 100,
    }),
    '500': prepColor({
      hue: 315,
      saturation: 90,
      brightness: 95,
    }),
    '700': prepColor({
      hue: 320,
      saturation: 90,
      brightness: 85,
    }),
  },
  gray: {
    '100': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 95,
    }),

    '300': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 87,
    }),

    '400': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 78,
    }),

    '500': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 62,
    }),

    '700': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 40,
    }),

    '800': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 28,
    }),

    '900': prepColor({
      hue: 0,
      saturation: 0,
      brightness: 15,
    }),
  },
  white: prepColor({
    hue: 0,
    saturation: 0,
    brightness: 100,
  }),
  black: prepColor({
    hue: 0,
    saturation: 0,
    brightness: 0,
  }),
};

export const LIGHT_BACKGROUND = COLORS.white;
export const DARK_BACKGROUND = COLORS.gray[900];

export const UNIT = 8;
export const CONTROL_RADIUS = 3;

export const PRIMARY_BACKGROUND = COLORS.gray[100];

export const FONT_WEIGHTS = {
  book: 500,
  medium: 600,
  bold: 700,
  black: 900,
};

export const BREAKPOINT_SIZES = {
  sm: 540,
  md: 900,
  lg: 1275,
};

export const BREAKPOINTS = {
  sm: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
  md: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  lg: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
  mdMin: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
  lgMin: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
};

export const HEADER_HEIGHT = 60;
export const MAX_WIDTH = {
  sm: '100%',
  md: BREAKPOINT_SIZES.md + 'px',
  base: BREAKPOINT_SIZES.lg + 'px',
};

export const Z_INDICES = {
  sidebar: 100,
  modal: 1000,
  loadingScreen: 2000,
  titlebar: 10000,
};
