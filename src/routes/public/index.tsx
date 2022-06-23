import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Public, Auth} from 'screens';
import {PublicRoutesTypes} from './types';

const Stack = createNativeStackNavigator<PublicRoutesTypes>();

const PublicRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Public.Onboarding} />
      <Stack.Screen name="Login" component={Auth.Login} />
      <Stack.Screen name="Register" component={Auth.Register} />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
