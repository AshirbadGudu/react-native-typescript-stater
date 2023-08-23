import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {PublicRoutes} from '~/routes';
import CustomTheme from '~/styles';

export default function App(): JSX.Element {
  return (
    <NativeBaseProvider
      theme={CustomTheme}
      config={{
        dependencies: {
          'linear-gradient': require('react-native-linear-gradient').default,
        },
      }}>
      <NavigationContainer>{<PublicRoutes />}</NavigationContainer>
    </NativeBaseProvider>
  );
}
