import React from 'react';
import {
  Avatar,
  Box,
  Heading,
  VStack,
  Row,
  Divider,
  Pressable,
} from 'native-base';
import {ICONS} from 'assets';

export default function CustomDrawer() {
  return (
    <>
      <Box minH={'full'}>
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
            <Avatar bg="primary.900" borderWidth={'1'} borderColor={'white'}>
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
        <VStack>
          <Pressable>
            <Row alignItems={'center'} px="2" py="2" space="2">
              <ICONS.Dashboard />
              <Heading size="md">Dashboard</Heading>
            </Row>
            <Divider />
          </Pressable>
        </VStack>
      </Box>
    </>
  );
}
