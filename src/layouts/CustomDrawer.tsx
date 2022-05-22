import React, {useMemo} from 'react';
import {
  Avatar,
  Box,
  Heading,
  VStack,
  Row,
  Divider,
  Pressable,
  Text,
  FlatList,
} from 'native-base';
import {ICONS} from 'assets';
import {useNavigation} from '@react-navigation/native';
import {CustomDrawerNavigationType} from 'routes';

export default function CustomDrawer() {
  const navigation = useNavigation<CustomDrawerNavigationType>();
  const SIDE_MENUS = useMemo(
    () => [
      {
        id: '1',
        title: 'Home',
        icon: <ICONS.Dashboard size={25} color={'gray'} />,
        onPress: () => {
          navigation.navigate('Home');
        },
      },
      {
        id: '2',
        title: 'Profile',
        icon: <ICONS.User size={25} color={'gray'} />,
        onPress: () => {
          navigation.navigate('Profile');
        },
      },
      {
        id: '3',
        title: 'Notifications',
        icon: <ICONS.Notification size={25} color={'gray'} />,
        onPress: () => {},
      },
      {
        id: '4',
        title: 'Live Chat',
        icon: <ICONS.Chat size={25} color={'gray'} />,
        onPress: () => {},
      },
      {
        id: '5',
        title: 'My Orders',
        icon: <ICONS.Bag size={25} color={'gray'} />,
        onPress: () => {},
      },
      {
        id: '6',
        title: 'Customer Support',
        icon: <ICONS.Help size={25} color={'gray'} />,
        onPress: () => {},
      },
      {
        id: '7',
        title: 'About Us',
        icon: <ICONS.Info size={25} color={'gray'} />,
        onPress: () => {},
      },
      {
        id: '8',
        title: 'Rate Us',
        icon: <ICONS.Star size={25} color={'gray'} />,
        onPress: () => {},
      },
      {
        id: '9',
        title: 'Logout',
        icon: <ICONS.Logout size={25} color={'gray'} />,
        onPress: () => {},
      },
      {
        id: '10',
        title: 'Close App',
        icon: <ICONS.Close size={25} color={'gray'} />,
        onPress: () => {},
      },
    ],
    [],
  );
  return (
    <>
      <Box safeAreaTop>
        <FlatList
          _contentContainerStyle={{minH: 'full'}}
          ListHeaderComponent={
            <>
              <Row
                bg={{
                  linearGradient: {
                    colors: ['primary.600', 'primary.800'],
                    start: [0, 0],
                    end: [1, 0],
                  },
                }}
                px="2"
                py="5"
                space={'3'}>
                <Row w="1/6">
                  <Avatar
                    bg="primary.900"
                    borderWidth={'1'}
                    borderColor={'white'}>
                    A
                  </Avatar>
                </Row>
                <VStack w="80%">
                  <Heading
                    color={'white'}
                    numberOfLines={1}
                    size={'md'}
                    ellipsizeMode="tail">
                    Ashirbad Panigrahi
                  </Heading>
                  <Heading
                    color={'white'}
                    numberOfLines={1}
                    size={'xs'}
                    ellipsizeMode="tail">
                    ashirbadpanigrahi@gmail.com
                  </Heading>
                </VStack>
              </Row>
            </>
          }
          data={SIDE_MENUS}
          renderItem={({item}) => (
            <>
              <Pressable
                onPress={() => {
                  item?.onPress();
                }}>
                <Row alignItems={'center'} px="2" py="4" space="2">
                  {item.icon}
                  <Text fontSize={18}>{item.title}</Text>
                </Row>
                <Divider />
              </Pressable>
            </>
          )}
          keyExtractor={item => item.id}
        />
      </Box>
    </>
  );
}
