import {ICONS} from 'assets';
import {Center} from 'native-base';
import React from 'react';
import {Text} from 'react-native';

export default function Router() {
  return (
    <Center>
      <Text
        style={{
          fontFamily: 'Nunito-Bold',
        }}>
        <ICONS.Chat /> Hello Fonts
      </Text>
    </Center>
  );
}
