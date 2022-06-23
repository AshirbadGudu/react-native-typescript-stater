import {useNavigation} from '@react-navigation/native';
import {ICONS} from 'assets';
import {
  Avatar,
  Box,
  FlatList,
  Heading,
  HStack,
  Pressable,
  Row,
  VStack,
} from 'native-base';
import React from 'react';
import {StackAndTabType} from 'routes';
import {COLORS} from 'styles';
export default function Chats() {
  const navigation = useNavigation<StackAndTabType>();
  return (
    <>
      <Box
        safeAreaTop
        minH={'full'}
        bg={{
          linearGradient: {
            colors: ['primary.100', 'primary.50'],
            start: [0, 1],
            end: [1, 0],
          },
        }}>
        <FlatList
          _contentContainerStyle={{
            py: '4',
            px: '6',
          }}
          data={[
            {
              key: '1',
              displayName: 'Akhil Jaini',
              lastMessage: 'Hello how are you?',

              uri: 'https://randomuser.me/api/portraits/med/men/1.jpg',
            },
            {
              key: '2',
              displayName: 'Anisha Sen',
              lastMessage: 'Hi, are you there?',

              uri: 'https://randomuser.me/api/portraits/med/women/2.jpg',
            },
            {
              key: '3',
              displayName: 'Ankit Kumar',
              lastMessage: 'Hi, Ankit',

              uri: 'https://randomuser.me/api/portraits/med/men/3.jpg',
            },
            {
              key: '4',
              displayName: 'Pallavi Sharma',
              lastMessage: 'Hi, Pallavi',

              uri: 'https://randomuser.me/api/portraits/med/women/1.jpg',
            },
            {
              key: '5',
              displayName: 'Sushant Kumar',
              lastMessage: 'Sushant, how are you?',

              uri: 'https://randomuser.me/api/portraits/med/men/5.jpg',
            },
            {
              key: '6',
              displayName: 'Sipra Hota',
              lastMessage: 'Hello, Sipra',

              uri: 'https://randomuser.me/api/portraits/med/women/60.jpg',
            },
            {
              key: '7',
              displayName: 'Partha Goswami',
              lastMessage: 'Hi, Partha',

              uri: 'https://randomuser.me/api/portraits/med/men/7.jpg',
            },
          ]}
          renderItem={({item, index}) => (
            <Pressable onPress={() => navigation.navigate('ChatDetails')}>
              <Row alignItems="center" mb="8" justifyContent={'space-between'}>
                <HStack space="4" alignItems="center">
                  <Avatar source={{uri: item.uri}} size="md">
                    {item.displayName.charAt(0)}
                    {index % 2 === 0 && <Avatar.Badge bg="green.500" />}
                  </Avatar>
                  <VStack>
                    <Heading size="md" fontWeight={'medium'}>
                      {item.displayName}
                    </Heading>
                    <Heading size="xs" fontWeight={'light'}>
                      {item.lastMessage}
                    </Heading>
                  </VStack>
                </HStack>
                <ICONS.ChevronRight color={COLORS.primary[500]} />
              </Row>
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Box>
    </>
  );
}
