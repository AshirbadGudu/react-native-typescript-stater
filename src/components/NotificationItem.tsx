import {useIsMounted} from 'hooks';
import moment from 'moment';
import {Actionsheet, Button, Heading, Row, useDisclose} from 'native-base';
import React from 'react';
import {Alert} from 'react-native';
import {Notification} from 'types';
import {List} from './core';

type Props = {
  notification: Notification;
  refetch: () => void;
};

export default function NotificationItem({notification, refetch}: Props) {
  const isMounted = useIsMounted();
  const {isOpen, onOpen, onClose} = useDisclose();
  const markAsRead = async () => {
    try {
      // isMounted.current && setLoading(true);
      onClose();

      refetch();
      // isMounted.current && setLoading(false);
    } catch (error) {
      // isMounted.current && setLoading(false);
      if (error instanceof Error) return Alert.alert('Error', error.message);
      return Alert.alert('Error', 'Something went wrong');
    }
  };
  const deleteNotification = async () => {
    try {
      onClose();
      // isMounted.current && setLoading(true);
      refetch();
      // isMounted.current && setLoading(false);
    } catch (error) {
      // isMounted.current && setLoading(false);
      if (error instanceof Error) return Alert.alert('Error', error.message);
      return Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Heading fontWeight={'semibold'} my="2">
            {notification.title}
          </Heading>
          <Heading fontWeight={'light'} fontSize="md">
            {notification.body}
          </Heading>
          <Row space="4" my="4">
            <Button onPress={deleteNotification} colorScheme={'red'}>
              Remove
            </Button>
            <Button onPress={markAsRead} colorScheme={'green'}>
              Mark as Read
            </Button>
          </Row>
        </Actionsheet.Content>
      </Actionsheet>
      <List
        title={notification.title}
        subtitle={notification.body}
        caption={moment(notification.createdAt).fromNow()}
        showBadgeInIcon={!notification.isRead}
        onPress={() => onOpen()}
        leftIcon="Notification"
      />
    </>
  );
}
