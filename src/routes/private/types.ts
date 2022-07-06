import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabsTypes} from 'layouts';
import {Private} from 'screens';

type PrivateScreens = {
  [key in keyof typeof Private]: undefined;
};

export type PrivateNavigationProp = Omit<PrivateScreens, 'ChatDetails'> & {
  ChatDetails: {
    chatRoomID?: string;
  };
};

export type PrivateRoutesTypes = {
  BottomTabs: undefined;
} & PrivateNavigationProp;

export type StackAndTabType = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsTypes>,
  NativeStackNavigationProp<PrivateRoutesTypes>
>;
