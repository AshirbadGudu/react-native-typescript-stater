import {extendTheme} from 'native-base';
import {fontFamily} from '../../app.json';

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
    [fontFamily]: {
      100: {
        normal: `${fontFamily}-Light`,
        italic: `${fontFamily}-LightItalic`,
      },
      200: {
        normal: `${fontFamily}-ExtraLight`,
        italic: `${fontFamily}-ExtraLightItalic`,
      },
      300: {
        normal: `${fontFamily}-Regular`,
        italic: `${fontFamily}-Italic`,
      },
      400: {
        normal: `${fontFamily}-Medium`,
        italic: `${fontFamily}-MediumItalic`,
      },
      500: {
        normal: `${fontFamily}-SemiBold`,
        italic: `${fontFamily}-SemiBoldItalic`,
      },
      600: {
        normal: `${fontFamily}-Bold`,
        italic: `${fontFamily}-BoldItalic`,
      },
      700: {
        normal: `${fontFamily}-ExtraBold`,
        italic: `${fontFamily}-ExtraBoldItalic`,
      },
      800: {
        normal: `${fontFamily}-Black`,
        italic: `${fontFamily}-BlackItalic`,
      },
      900: {
        normal: `${fontFamily}-Black`,
        italic: `${fontFamily}-BlackItalic`,
      },
    },
    fonts: {
      heading: `${fontFamily}`,
      body: `${fontFamily}`,
      mono: `${fontFamily}`,
    },
  },
});

export default CustomTheme;
