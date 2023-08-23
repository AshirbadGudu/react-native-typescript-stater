import {CompositeNavigationProp} from '@react-navigation/native';
import {Private} from '~/screens';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type BottomTabsTypes = {
  Home: undefined;
  Profile: undefined;
};

type PrivateScreens = {
  [key in keyof typeof Private]: undefined;
};

export type PrivateNavigationProp = Omit<PrivateScreens, 'Search'> & {
  Search: {title?: string};
};

export type PrivateRoutesTypes = {
  TabLayouts: undefined;
} & PrivateNavigationProp;

export type StackAndTabType = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsTypes>,
  NativeStackNavigationProp<PrivateRoutesTypes>
>;
