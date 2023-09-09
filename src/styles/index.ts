import {extendTheme} from 'native-base';

export const COLORS = {
  primary: {
    50: '#D9E4FF',
    100: '#B0C7FF',
    200: '#87AAFF',
    300: '#5E8DFF',
    400: '#356FFF',
    500: '#0C52FF',
    600: '#0A43D6',
    700: '#0835AD',
    800: '#062682',
    900: '#041856',
    950: '#020A2B',
  },
};

const CustomTheme = extendTheme({
  colors: COLORS,
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins-Light',
        italic: 'Poppins-LightItalic',
      },
      200: {
        normal: 'Poppins-ExtraLight',
        italic: 'Poppins-ExtraLightItalic',
      },
      300: {
        normal: 'Poppins-Regular',
        italic: 'Poppins-Italic',
      },
      400: {
        normal: 'Poppins-Medium',
        italic: 'Poppins-MediumItalic',
      },
      500: {
        normal: 'Poppins-SemiBold',
        italic: 'Poppins-SemiBoldItalic',
      },
      600: {
        normal: 'Poppins-Bold',
        italic: 'Poppins-BoldItalic',
      },
      700: {
        normal: 'Poppins-ExtraBold',
        italic: 'Poppins-ExtraBoldItalic',
      },
      800: {
        normal: 'Poppins-Black',
        italic: 'Poppins-BlackItalic',
      },
      900: {
        normal: 'Poppins-Black',
        italic: 'Poppins-BlackItalic',
      },
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
      mono: 'Poppins',
    },
  },
});

export default CustomTheme;
