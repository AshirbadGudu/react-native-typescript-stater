import {extendTheme} from 'native-base';

export const COLORS = {
  primary: {
    '50': '#ebf5ff',
    '100': '#daeeff',
    '200': '#8fd3ff',
    '300': '#5ab8ff',
    '400': '#3499fd',
    '500': '#1877f2',
    '600': '#1664df',
    '700': '#1950b4',
    '800': '#1a468e',
    '900': '#00008b',
  },
  secondary: {
    '50': '#f6f6f6',
    '100': '#ededed',
    '200': '#e6e6e6',
    '300': '#d6d6d6',
    '400': '#a5a5a5',
    '500': '#000000',
    '600': '#000000',
    '700': '#000000',
    '800': '#000000',
    '900': '#000000',
  },
};

const CustomTheme = extendTheme({
  colors: COLORS,
  fontConfig: {
    Nunito: {
      100: {
        normal: 'Nunito-Regular',
      },
      200: {
        normal: 'Nunito-Regular',
      },
      300: {
        normal: 'Nunito-Regular',
      },
      400: {
        normal: 'Nunito-Regular',
      },
      500: {
        normal: 'Nunito-Bold',
      },
      600: {
        normal: 'Nunito-Bold',
      },
      700: {
        normal: 'Nunito-Bold',
      },
      800: {
        normal: 'Nunito-Bold',
      },
      900: {
        normal: 'Nunito-Bold',
      },
    },
  },
  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
    mono: 'Nunito',
  },
});

export default CustomTheme;
