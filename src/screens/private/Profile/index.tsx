import {Box, Heading, ScrollView} from 'native-base';
import React from 'react';
import {Content, List} from '~/components/core';
import {IconProps} from '~/components/core/AppIcon';

const listData: {
  title: string;
  subtitle?: string;
  avatar?: string;
  leftIcon?: IconProps;
  isHeading?: boolean;
}[] = [
  {
    title: 'Matt',
    subtitle: 'Show Profile',
    avatar:
      'https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-person-gray-photo-placeholder-man-silhouette-on-white-background-png-image_4853539.png',
  },
  {
    title: 'Account Settings',
    isHeading: true,
  },
  {
    title: 'Personal Information',
    leftIcon: {FeatherName: 'user'},
  },
  {
    title: 'Payments & Payouts',
    leftIcon: {FeatherName: 'credit-card'},
  },
  {
    title: 'Translation',
    leftIcon: {FeatherName: 'globe'},
  },
  {
    title: 'Notifications',
    leftIcon: {FeatherName: 'bell'},
  },
  {
    title: 'Support',
    isHeading: true,
  },
  {
    title: 'Get Help',
    leftIcon: {FeatherName: 'help-circle'},
  },
  {
    title: 'Safely Center',
    leftIcon: {FeatherName: 'shield'},
  },
  {
    title: 'Give Us Feedback',
    leftIcon: {FeatherName: 'message-square'},
  },
  {
    title: 'Legal',
    isHeading: true,
  },
  {
    title: 'Privacy Policy',
    leftIcon: {FeatherName: 'lock'},
  },
  {
    title: 'Terms of Service',
    leftIcon: {FeatherName: 'file-text'},
  },
  {
    title: 'About',
    leftIcon: {FeatherName: 'info'},
  },
  {
    title: 'Account Actions',
    isHeading: true,
  },
  {
    title: 'Logout',
    leftIcon: {FeatherName: 'log-out'},
  },
  {
    title: 'Change Password',
    leftIcon: {FeatherName: 'key'},
  },
  {
    title: 'Delete Account',
    leftIcon: {FeatherName: 'trash'},
  },
];

export default function Profile() {
  return (
    <Box safeAreaTop>
      <ScrollView _contentContainerStyle={{bg: 'white', minH: 'full', p: 3}}>
        {listData.map((item, index) => (
          <React.Fragment key={index}>
            {item.isHeading ? (
              <Content size="md" mt={3} mb={2} weight="bold">
                {item.title}
              </Content>
            ) : (
              <List
                title={item.title}
                leftIcon={item.leftIcon}
                subtitle={item.subtitle}
                avatar={item.avatar}
              />
            )}
          </React.Fragment>
        ))}
      </ScrollView>
    </Box>
  );
}
