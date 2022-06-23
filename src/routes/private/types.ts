import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabsTypes} from 'layouts';

export type PrivateRoutesTypes = {
  BottomTabs: undefined;
  EditProfile: undefined;
  Notifications: undefined;
  ChatDetails: undefined;
};

export type StackAndTabType = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsTypes>,
  NativeStackNavigationProp<PrivateRoutesTypes>
>;
