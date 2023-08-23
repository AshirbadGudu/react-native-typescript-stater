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
});

export default CustomTheme;
