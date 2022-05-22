import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditProfile} from 'screens';
import {PrivateRoutesTypes} from './types';
import {BottomTabs} from 'layouts';

const Stack = createNativeStackNavigator<PrivateRoutesTypes>();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
