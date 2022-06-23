import {useNavigation} from '@react-navigation/native';
import {ICONS, ANIMATIONS} from 'assets';
import {Empty} from 'components/core';
import {
  Box,
  Row,
  Heading,
  Center,
  VStack,
  FlatList,
  Pressable,
} from 'native-base';
import React from 'react';
import {StackAndTabType} from 'routes';

export default function Notifications() {
  const navigation = useNavigation<StackAndTabType>();

  return (
    <>
      <Box safeAreaTop minH={'full'}>
        <FlatList
          _contentContainerStyle={{
            py: '4',
            px: '4',
          }}
          data={[]}
          renderItem={({item, index}) => (
            <Pressable>
              <Row
                space={'0.5'}
                my="2"
                bg="primary.50"
                shadow={'4'}
                rounded="md"
                alignItems={'center'}>
                <Center p="3">
                  <ICONS.User size={32} />
                </Center>
                <VStack space={'0.5'} py="1">
                  <Heading fontSize={'md'} fontWeight={'medium'}>
                    {'IELTS Study Abroad 2022'}
                  </Heading>
                  <Heading
                    w="89%"
                    fontSize={'xs'}
                    fontWeight={'light'}
                    numberOfLines={2}>
                    {'Study abroad,english,spokem and written common skilss'}
                  </Heading>
                  <Heading fontSize={'xs'} fontWeight={'medium'}>
                    3{index} Students
                  </Heading>
                </VStack>
              </Row>
            </Pressable>
          )}
          ListEmptyComponent={
            <Empty
              animation={ANIMATIONS.NOTIFICATIONS}
              title={'No Notifications'}
              subtitle={'You have no notifications'}
              action={{
                label: 'Go Back',
                onPress: () => navigation.goBack(),
              }}
            />
          }
          keyExtractor={(_, index) => index.toString()}
        />
      </Box>
    </>
  );
}
