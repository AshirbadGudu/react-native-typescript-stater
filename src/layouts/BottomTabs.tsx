import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile} from 'screens';

export type BottomTabsTypes = {
  Home: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsTypes>();

export default function BottomTabs() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
}
