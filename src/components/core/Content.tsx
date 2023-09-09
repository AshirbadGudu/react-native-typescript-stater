import {Heading} from 'native-base';
import React from 'react';
import {TextStyle} from 'react-native';
import {fontFamily} from '../../../app.json';

type HeadingProps = React.ComponentProps<typeof Heading> & {
  bold?: boolean;
  weight?: TextStyle['fontWeight'];
};

export default function Content({
  bold,
  weight = '600',
  ...props
}: HeadingProps) {
  const getFontFamily = () => {
    if (weight === 'bold') return `${fontFamily}-Bold`;
    if (weight === '400') return `${fontFamily}-Medium`;
    return `${fontFamily}-Regular`;
  };
  return (
    <>
      <Heading
        {...props}
        style={{
          fontFamily: getFontFamily(),
          fontWeight: '600',
        }}
      />
    </>
  );
}
