import {Heading} from 'native-base';
import React from 'react';
import {TextStyle} from 'react-native';

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
    if (weight === 'bold') return 'Poppins-Bold';
    if (weight === '400') return 'Poppins-Medium';
    return 'Poppins-Regular';
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
