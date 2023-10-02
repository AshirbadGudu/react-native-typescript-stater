import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {PrivateRoutesTypes} from '~/routes/private/types';
import {Private} from '~/screens';
import {TabLayout} from '../layouts';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator<PrivateRoutesTypes>();

export default function PrivateRoutes({}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabLayouts" component={TabLayout} />
      <Stack.Screen name="Checkout" component={Private.Checkout} />
      <Stack.Screen name="Coupons" component={Private.Coupons} />
      <Stack.Screen name="FAQs" component={Private.FAQs} />
      <Stack.Screen name="Home" component={Private.Home} />
      <Stack.Screen name="Notifications" component={Private.Notifications} />
      <Stack.Screen name="Offers" component={Private.Offers} />
      <Stack.Screen name="Profile" component={Private.Profile} />
      <Stack.Screen name="Search" component={Private.Search} />
      <Stack.Screen
        name="Settings"
        component={Private.Settings}
        sharedElements={(route, otherRoute, showing) => {
          return ['id-1'];
        }}
      />
      <Stack.Screen name="Support" component={Private.Support} />
    </Stack.Navigator>
  );
}
