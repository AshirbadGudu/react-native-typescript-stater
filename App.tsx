/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import Router from './src/Router';

export default function App() {
  return (
    <>
      <NativeBaseProvider
        config={{
          dependencies: {
            'linear-gradient': require('react-native-linear-gradient').default,
          },
        }}>
        <Router />
      </NativeBaseProvider>
    </>
  );
}
