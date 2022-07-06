import {extendTheme} from 'native-base';

export const COLORS = {
  primary: {
    '50': '#FFFFFC',
    '100': '#C6DDFC',
    '200': '#8CBBF9',
    '300': '#65A4F6',
    '400': '#3F8EF4',
    '500': '#1877F2',
    '600': '#0B5DC7',
    '700': '#084492',
    '800': '#052B5C',
    '900': '#021227',
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

export const FONTS = {
  100: {
    normal: 'Nunito-Thin',
    italic: 'Nunito-ThinItalic',
  },
  200: {
    normal: 'Nunito-ExtraLight',
    italic: 'Nunito-ExtraLightItalic',
  },
  300: {
    normal: 'Nunito-Light',
    italic: 'Nunito-LightItalic',
  },
  400: {
    normal: 'Nunito-Regular',
    italic: 'Nunito-Italic',
  },
  500: {
    normal: 'Nunito-Medium',
    italic: 'Nunito-MediumItalic',
  },
  600: {
    normal: 'Nunito-SemiBold',
    italic: 'Nunito-SemiBoldItalic',
  },
  700: {
    normal: 'Nunito-Bold',
    italic: 'Nunito-BoldItalic',
  },
  800: {
    normal: 'Nunito-ExtraBold',
    italic: 'Nunito-ExtraBoldItalic',
  },
  900: {
    normal: 'Nunito-Black',
    italic: 'Nunito-BlackItalic',
  },
};

const CustomTheme = extendTheme({
  colors: COLORS,
  fontConfig: {Nunito: FONTS},
  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
    mono: 'Nunito',
  },
});

export default CustomTheme;
