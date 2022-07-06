import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Private} from 'screens';
import {PrivateRoutesTypes} from './types';
import {BottomTabs} from 'layouts';
import {FONTS} from 'styles';

const Stack = createNativeStackNavigator<PrivateRoutesTypes>();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: '#000',
        headerBackTitleVisible: false,
        headerTitleStyle: {fontFamily: FONTS[700].normal},
      }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="ChatDetails" component={Private.ChatDetails} />
      <Stack.Screen
        name="EditProfile"
        component={Private.EditProfile}
        options={{
          headerShown: true,
          headerTitle: 'Edit Profile',
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Private.Notifications}
        options={{
          headerShown: true,
          headerTitle: 'Notifications',
        }}
      />
      <Stack.Screen
        name="About"
        component={Private.About}
        options={{
          headerShown: true,
          headerTitle: 'About',
        }}
      />
      <Stack.Screen
        name="CustomerSupport"
        component={Private.CustomerSupport}
        options={{
          headerShown: true,
          headerTitle: 'Customer Support',
        }}
      />
      <Stack.Screen
        name="FAQ"
        component={Private.FAQ}
        options={{
          headerShown: true,
          headerTitle: 'FAQ',
        }}
      />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
