import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Public} from '~/screens';
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
    </Stack.Navigator>
  );
}
