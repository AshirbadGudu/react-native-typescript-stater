import React from 'react';
import {PrivateRoutes} from 'routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
export default function DrawerLayout() {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={() => <CustomDrawer />}>
        <Drawer.Screen name="PrivateRoutes" component={PrivateRoutes} />
      </Drawer.Navigator>
    </>
  );
}
