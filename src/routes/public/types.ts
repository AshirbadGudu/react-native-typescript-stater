import {Auth, Public} from '~/screens';

export type PublicRoutesTypes = {
  [key in keyof typeof Public]: undefined;
} & {[key in keyof typeof Auth]: undefined};
