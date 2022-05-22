import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditProfile, Home, Profile} from 'screens';
import {PrivateRoutesTypes} from './types';

const Stack = createNativeStackNavigator<PrivateRoutesTypes>();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
