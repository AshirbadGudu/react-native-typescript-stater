import {ICONS} from 'assets';
import {Pressable, Row, Center, Avatar, VStack, Heading} from 'native-base';
import React from 'react';

type Props = React.ComponentProps<typeof Pressable> & {
  showBadgeInIcon?: boolean;
  title: string;
  subtitle?: string;
  caption?: string;
  leftIcon?: keyof typeof ICONS;
};

export default function List({
  onPress,
  showBadgeInIcon,
  title,
  subtitle,
  caption,
  leftIcon,
  ...PressableProps
}: Props) {
  return (
    <>
      <Pressable
        onPress={onPress}
        p="1.5"
        my="1.5"
        bg="primary.50"
        shadow={'4'}
        rounded="md"
        {...PressableProps}>
        <Row space={'0.5'} alignItems={'center'}>
          {leftIcon && (
            <Center mr="2">
              <Avatar bg="gray.100" size="md">
                {ICONS[leftIcon]({})}
                {showBadgeInIcon && <Avatar.Badge bg="green.500" />}
              </Avatar>
            </Center>
          )}
          <VStack space={'0.5'} w="79%">
            <Heading fontSize={'md'} fontWeight={'medium'} numberOfLines={1}>
              {title}
            </Heading>
            {subtitle && (
              <Heading fontSize={'xs'} fontWeight={'light'} numberOfLines={2}>
                {subtitle}
              </Heading>
            )}
            {caption && (
              <Heading fontSize={'xs'} fontWeight={'medium'}>
                {caption}
              </Heading>
            )}
          </VStack>
        </Row>
      </Pressable>
    </>
  );
}
