import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, Center, Heading, HStack} from 'native-base';
import {Dimensions, FlatList, useWindowDimensions} from 'react-native';
import {ANIMATIONS} from 'assets';
import AnimatedLottieView from 'lottie-react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PublicRoutesTypes} from 'routes';

type Props = NativeStackScreenProps<PublicRoutesTypes, 'Onboarding'>;

const OnboardingScreens = [
  {
    id: 1,
    img: ANIMATIONS.COSTUMER_SUPPORT,
    title: 'Personalized & \nHigh Quality Assistance',
    des: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    id: 2,
    img: ANIMATIONS.NOTIFICATIONS,
    title: 'In-App Messaging & \nNotifications',
    des: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    id: 3,
    img: ANIMATIONS.REFER,
    title: 'Easy Payment \n& Withdrawal',
    des: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
];

const OnBoarding = ({navigation}: Props) => {
  const slideRef = useRef<FlatList>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [viewableItems, setViewableItems] = useState<any>([]);
  const WINDOW_WIDTH = useWindowDimensions();
  const handleViewableItemsChanged = useRef(({viewableItems}: any) => {
    setViewableItems(viewableItems);
  });
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);

  const handleNext = (i: number) => {
    if (i === OnboardingScreens.length - 1) return navigation.navigate('Login');
    slideRef.current?.scrollToIndex({
      animated: true,
      index: OnboardingScreens.length - 1,
    });
  };

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
        {[...Array(OnboardingScreens.length)].map((_, index) => (
          <Box key={index} display={index === currentPage ? 'flex' : 'none'}>
            <Button variant={'link'} onPress={() => handleNext(index)}>
              {index == OnboardingScreens.length - 1 ? 'Done' : 'Skip'}
            </Button>
          </Box>
        ))}
      </HStack>
      <FlatList
        data={OnboardingScreens}
        renderItem={({item}) => {
          return (
            <Box flex={1} w={Dimensions.get('window').width} mt="10" p="4">
              <Center>
                <AnimatedLottieView
                  source={item.img}
                  autoPlay
                  style={{height: 300}}
                  loop={false}
                />
                <Heading textAlign={'center'} my="2">
                  {item?.title}
                </Heading>
                <Heading
                  textAlign={'center'}
                  my="2"
                  size="sm"
                  fontWeight={'medium'}>
                  {item?.des}
                </Heading>
              </Center>
            </Box>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={slideRef}
        initialNumToRender={1}
        extraData={WINDOW_WIDTH}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
      />
      <Center pb="16">
        <HStack space="2">
          {[...Array(OnboardingScreens.length)].map((_, index) => (
            <Box
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
};

export default OnBoarding;
