import React from 'react';
import LottieView, {AnimationObject} from 'lottie-react-native';
import {Box, Button, Center, Heading} from 'native-base';

type EmptyProps = {
  title: string;
  animation: AnimationObject;
  subtitle: string;
  action?: {
    label: string;
    onPress: () => void;
  };
  noLoop?: boolean;
};

export default ({
  title,
  animation,
  subtitle,
  action,
  noLoop = false,
}: EmptyProps) => {
  return (
    <>
      <Center>
        <Box h="96" w="full">
          {Boolean(animation) && (
            <LottieView source={animation} autoPlay loop={!noLoop} />
          )}
        </Box>
        <Heading>{title}</Heading>
        {Boolean(subtitle) && (
          <Heading fontSize={'lg'} fontWeight={'medium'} my="2">
            {subtitle}
          </Heading>
        )}
        {Boolean(action) && (
          <Button my={'2'} onPress={() => action?.onPress()}>
            {action?.label}
          </Button>
        )}
      </Center>
    </>
  );
};
