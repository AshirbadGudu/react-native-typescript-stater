import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth, Public} from '~/screens';
import {PublicRoutesTypes} from './types';

const Stack = createNativeStackNavigator<PublicRoutesTypes>();

type PublicRouteProps = {
  initialRouteName?: keyof PublicRoutesTypes;
};

export default function PublicRoutes({
  initialRouteName = 'Onboarding',
}: PublicRouteProps) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Public.Onboarding} />
      <Stack.Screen name="Login" component={Auth.Login} />
      <Stack.Screen name="Register" component={Auth.Register} />
      <Stack.Screen name="ForgotPassword" component={Auth.ForgotPassword} />
    </Stack.Navigator>
  );
}
