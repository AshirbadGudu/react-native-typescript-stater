import {useNavigation} from '@react-navigation/native';
import {ANIMATIONS} from 'assets';
import {NotificationItem} from 'components';
import {Empty} from 'components/core';
import {Box, FlatList} from 'native-base';
import React from 'react';
import {StackAndTabType} from 'routes';

export default function Notifications() {
  const navigation = useNavigation<StackAndTabType>();

  return (
    <>
      <Box minH={'full'}>
        <FlatList
          _contentContainerStyle={{
            py: '2',
            px: '2',
          }}
          data={[2]}
          renderItem={({item, index}) => (
            <NotificationItem
              notification={{
                title: 'Notification title',
                body: 'Notification description',
                createdAt: new Date().toString(),
                _id: '123',
                isRead: false,
              }}
              refetch={() => {}}
            />
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
