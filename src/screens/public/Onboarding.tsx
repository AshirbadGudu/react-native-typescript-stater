import {Box, Button, Center, HStack, Pressable} from 'native-base';
import React, {useRef, useState} from 'react';
import {FlatList, ViewToken, useWindowDimensions} from 'react-native';
import {ANIMATIONS} from '~/assets';
import {OnboardingSlide} from '~/components';
import {Content} from '~/components/core';

const OnboardingScreens = [
  {
    id: 1,
    animation: ANIMATIONS.order,
    title: 'Do eiusmod tempor incididunt, ipsum dolor sit amet.',
    subtitle:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    id: 2,
    animation: ANIMATIONS.search,
    title: 'Do eiusmod tempor incididunt, ipsum dolor sit amet.',
    subtitle:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    id: 3,
    animation: ANIMATIONS.address,
    title: 'Do eiusmod tempor incididunt, ipsum dolor sit amet.',
    subtitle:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
];

export default function Onboarding({navigation}: any): JSX.Element {
  const flatListRef = useRef<FlatList>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const windowDimensions = useWindowDimensions();

  const onViewableItemsChanged = useRef<
    (info: {viewableItems: Array<ViewToken>}) => void
  >(({viewableItems}) => {
    if (typeof viewableItems?.[0]?.index !== 'number') return;
    setCurrentPage(viewableItems?.[0]?.index);
  });

  return (
    <Box
      safeAreaTop
      h="full"
      bg={{
        linearGradient: {
          colors: ['primary.100', 'primary.50'],
          start: [1, 1],
          end: [0, 0],
        },
      }}>
      <HStack justifyContent={'flex-end'} p="2">
        <Pressable
          p="2"
          _pressed={{opacity: 0.5}}
          onPress={() =>
            currentPage === OnboardingScreens.length - 1
              ? navigation.replace('Login')
              : flatListRef.current?.scrollToIndex({
                  animated: true,
                  index: OnboardingScreens.length - 1,
                })
          }>
          <Content size="xs">
            {currentPage == OnboardingScreens.length - 1 ? 'Done' : 'Skip'}
          </Content>
        </Pressable>
      </HStack>
      <FlatList
        data={OnboardingScreens}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        initialNumToRender={1}
        extraData={windowDimensions}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
        renderItem={({item}) => (
          <OnboardingSlide
            mt="10"
            px="4"
            w={windowDimensions.width}
            item={item}
          />
        )}
      />
      {/* The Dots */}
      <Center pb="16">
        <HStack space="2">
          {[...Array(OnboardingScreens.length)].map((_, index) => (
            <Pressable
              onPress={() =>
                flatListRef.current?.scrollToIndex({animated: true, index})
              }
              _pressed={{bg: 'primary.600'}}
              key={index}
              rounded="sm"
              h="2"
              w={index == currentPage ? '6' : '2'}
              bg={index == currentPage ? 'primary.700' : 'primary.300'}
            />
          ))}
        </HStack>
      </Center>
    </Box>
  );
}
