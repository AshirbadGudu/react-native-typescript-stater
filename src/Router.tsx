import {ICONS} from 'assets';
import React from 'react';
import {Text} from 'react-native';

export default function Router() {
  return (
    <>
      <Text
        style={{
          fontFamily: 'Nunito-Bold',
        }}>
        <ICONS.Chat /> Hello Fonts
      </Text>
    </>
  );
}
