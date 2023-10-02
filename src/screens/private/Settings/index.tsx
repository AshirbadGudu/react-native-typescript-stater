import {Image} from 'react-native';
import React from 'react';
import {SharedElement} from 'react-navigation-shared-element';
export default function Index() {
  return (
    <SharedElement id={'id-1'}>
      <Image
        source={{
          uri: 'https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-person-gray-photo-placeholder-man-silhouette-on-white-background-png-image_4853539.png',
        }}
        style={{width: '100%', height: 500}}
        alt="abc"
      />
    </SharedElement>
  );
}
