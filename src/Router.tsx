import React from 'react';
import {PrivateRoutes} from 'routes';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="PrivateRoutes" component={PrivateRoutes} />
      </Drawer.Navigator>
    </>
  );
}
