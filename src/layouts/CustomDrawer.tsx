import React, {useMemo} from 'react';
import {
  Avatar,
  Box,
  Heading,
  VStack,
  Row,
  Divider,
  Pressable,
  FlatList,
} from 'native-base';
import {ICONS} from 'assets';
import {useNavigation} from '@react-navigation/native';
import {StackAndTabType} from 'routes';
import {useAuth} from 'hooks';
import {BackHandler, Linking} from 'react-native';
import {COLORS} from 'styles';

export default function CustomDrawer() {
  const navigation = useNavigation<StackAndTabType>();
  const {setIsAuthenticated} = useAuth(state => state);
  const SIDE_MENUS = useMemo(
    () => [
      {
        id: '1',
        title: 'Home',
        icon: <ICONS.Dashboard size={28} color={COLORS.primary[600]} />,
        onPress: () => {
          navigation.navigate('Home');
        },
      },
      {
        id: '2',
        title: 'Profile',
        icon: <ICONS.User size={28} color={COLORS.primary[600]} />,
        onPress: () => navigation.navigate('Profile'),
      },
      {
        id: '3',
        title: 'Notifications',
        icon: <ICONS.Notification size={28} color={COLORS.primary[600]} />,
        onPress: () => navigation.navigate('Notifications'),
      },
      {
        id: '4',
        title: 'Live Chat',
        icon: <ICONS.Chat size={28} color={COLORS.primary[600]} />,
        onPress: () => navigation.navigate('Chats'),
      },
      {
        id: '5',
        title: 'My Orders',
        icon: <ICONS.Bag size={28} color={COLORS.primary[600]} />,
        onPress: () => {},
      },
      {
        id: '6',
        title: 'Customer Support',
        icon: <ICONS.Help size={28} color={COLORS.primary[600]} />,
        onPress: () => navigation.navigate('CustomerSupport'),
      },
      {
        id: 'faq6',
        title: 'FAQ',
        icon: <ICONS.FAQ size={28} color={COLORS.primary[600]} />,
        onPress: () => navigation.navigate('FAQ'),
      },
      {
        id: '7',
        title: 'About Us',
        icon: <ICONS.Info size={28} color={COLORS.primary[600]} />,
        onPress: () => navigation.navigate('About'),
      },
      {
        id: '8',
        title: 'Rate Us',
        icon: <ICONS.Star size={28} color={COLORS.primary[600]} />,
        onPress: () => Linking.openURL('https://play.google.com/store/apps'),
      },
      {
        id: '9',
        title: 'Logout',
        icon: <ICONS.Logout size={28} color={COLORS.primary[600]} />,
        onPress: () => setIsAuthenticated(false),
      },
      {
        id: '10',
        title: 'Close App',
        icon: <ICONS.Close size={28} color={COLORS.primary[600]} />,
        onPress: () => BackHandler.exitApp(),
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
            <Pressable onPress={() => navigation.navigate('EditProfile')}>
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
                alignItems={'center'}
                space={'3'}>
                <>
                  <Avatar
                    borderColor={'#fff'}
                    borderWidth="1"
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/46.jpg',
                    }}
                    rounded={'lg'}
                    size="lg"
                    _image={{rounded: 'lg'}}
                    bg="primary.900">
                    JD
                  </Avatar>
                </>
                <VStack>
                  <Heading
                    color={'white'}
                    numberOfLines={1}
                    size={'md'}
                    ellipsizeMode="tail">
                    Mr. John Doe
                  </Heading>
                  <Heading
                    color={'white'}
                    numberOfLines={1}
                    size={'xs'}
                    ellipsizeMode="tail">
                    johndoe@gmail.com
                  </Heading>
                </VStack>
              </Row>
            </Pressable>
          }
          data={SIDE_MENUS}
          renderItem={({item}) => (
            <>
              <Pressable onPress={() => item?.onPress()}>
                <Row alignItems={'center'} px="2" py="4" space="4">
                  {item.icon}
                  <Heading fontWeight={'medium'} fontSize={'lg'}>
                    {item.title}
                  </Heading>
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
