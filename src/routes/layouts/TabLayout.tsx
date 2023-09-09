import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider, useColorMode} from 'native-base';
import React from 'react';
import {ICONS} from '~/assets';
import {AppIcon, Btn} from '~/components/core';
import {IconProps} from '~/components/core/AppIcon';
import {Private} from '~/screens';

const Tab = createBottomTabNavigator();
type BottomTabsTypes = {
  route: string;
  label: string;
  icon: IconProps;
  component: React.FC<any>;
};
const TabArr: BottomTabsTypes[] = [
  {
    route: 'Home',
    label: 'Home',
    icon: {
      AntDesignName: 'home',
    },
    component: Private.Home,
  },
  {
    route: 'Profile',
    label: 'Profile',
    icon: {
      AntDesignName: 'user',
    },
    component: Private.Profile,
  },
];

export default function TabLayout() {
  const {colorMode} = useColorMode();
  return (
    <NativeBaseProvider>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        {TabArr.map((_, i) => {
          return (
            <Tab.Screen
              key={i}
              name={_.route}
              component={_.component}
              options={{
                tabBarIcon: ({color, focused, size}) => {
                  return <AppIcon {..._.icon} color={color} size={size} />;
                },
                tabBarLabelStyle: {
                  fontFamily: 'Poppins-Regular',
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}
