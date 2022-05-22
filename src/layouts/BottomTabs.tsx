import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile} from 'screens';
import {ICONS} from 'assets';

export type BottomTabsTypes = {
  Home: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsTypes>();

export default function BottomTabs() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerTitleStyle: {fontFamily: 'Nunito-Bold'},
          tabBarLabelStyle: {fontFamily: 'Nunito-Regular'},
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <ICONS.Dashboard color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <ICONS.User color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
