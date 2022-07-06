import {Auth, Public} from 'screens';

type PublicScreens = {
  [key in keyof typeof Public]: undefined;
} & {
  [key in keyof typeof Auth]: undefined;
};

export type PublicRoutesTypes = PublicScreens & {};
