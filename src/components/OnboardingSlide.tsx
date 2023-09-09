import {Box, Center, Heading, Image} from 'native-base';
import React from 'react';
import AnimatedLottieView, {AnimationObject} from 'lottie-react-native';
import {Content} from './core';

type Props = {
  item: {
    title: string;
    subtitle: string;
    src?: string;
    animation?: AnimationObject;
  };
} & React.ComponentProps<typeof Box>;

export default function OnboardingSlide({
  item: {subtitle, title, src, animation},
  ..._box
}: Props): JSX.Element {
  return (
    <Box {..._box}>
      <Content textAlign={'left'} my="2" weight="400">
        {title}
      </Content>
      <Center>
        {animation ? (
          <>
            <AnimatedLottieView
              source={animation}
              autoPlay
              style={{height: 300}}
              loop={false}
            />
          </>
        ) : (
          <Image src={src} alt={title} h="64" w="full" resizeMode="contain" />
        )}
        <Content textAlign={'center'} my="2" size="sm">
          {subtitle}
        </Content>
      </Center>
    </Box>
  );
}
