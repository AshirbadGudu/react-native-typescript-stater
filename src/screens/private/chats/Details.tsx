import {useNavigation} from '@react-navigation/native';
import {ANIMATIONS, ICONS} from 'assets';
import {Empty} from 'components/core';
import {Avatar, Box, Column, Heading, Pressable, Row} from 'native-base';
import React, {useCallback, useState} from 'react';
import {Dimensions} from 'react-native';
import {Bubble, Composer, GiftedChat, Send} from 'react-native-gifted-chat';
import {StackAndTabType} from 'routes';
import {COLORS} from 'styles';
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default function Details() {
  const navigation = useNavigation<StackAndTabType>();
  const changeTypingStatus = useCallback(async txt => {}, []);
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello Survi',
      createdAt: new Date(),
      user: {
        _id: 'dd-02',
        name: 'Anul Kesharwani',
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
      },
    },
    {
      _id: 2,
      text: 'Please check',
      createdAt: new Date(),
      user: {
        _id: 'dd-01',
        avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
        name: 'Survi Jyoti',
      },
      pending: true,
    },
    {
      _id: 3,
      text: 'Today Class',
      createdAt: new Date(),
      user: {
        _id: 'dd-01',
        avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
        name: 'Survi Jyoti',
      },
      image:
        'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
      // You can also add a video prop:
      sent: true,
      // Mark the message as received, using two tick
      received: true,
    },
  ]);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <>
      <Box
        safeAreaTop
        minH={'full'}
        bg={{
          linearGradient: {
            colors: ['primary.50', 'primary.100'],
            start: [1, 1, 0],
            end: [1, 1, 0],
          },
        }}>
        <>
          <Row
            alignItems="center"
            space="4"
            bg="primary.50"
            p="2"
            justifyContent={'space-between'}>
            <Row alignItems="center" space="1.5">
              <Pressable p="1" onPress={() => navigation.goBack()}>
                <ICONS.ChevronLeft color={COLORS.primary[700]} />
              </Pressable>
              <Avatar
                source={{uri: 'https://randomuser.me/api/portraits/men/11.jpg'}}
                size="md">
                AK
                <Avatar.Badge bg="green.500" />
              </Avatar>
              <Column space={'0.5'}>
                <Heading fontSize={'md'} color="primary.800">
                  Anul Kesharwani
                </Heading>
                <Heading fontSize={'xs'} fontWeight="light">
                  Online
                </Heading>
              </Column>
            </Row>
            <Row alignItems="center" space="2">
              <Pressable
                bg="primary.500"
                p="2"
                rounded={'md'}
                onPress={() => navigation.goBack()}>
                <ICONS.VideoCamera color="#fff" />
              </Pressable>
              <Pressable
                bg="green.500"
                p="2"
                rounded={'md'}
                onPress={() => navigation.goBack()}>
                <ICONS.Phone color="#fff" />
              </Pressable>
            </Row>
          </Row>
          <GiftedChat
            onSend={onSend}
            user={{
              _id: 'dd-01',
              avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
              name: 'Survi Jyoti',
            }}
            scrollToBottom
            showUserAvatar
            renderChatEmpty={() => (
              <Box style={{transform: [{scaleY: -1}]}} h="full">
                <Empty
                  animation={ANIMATIONS.NO_RESULTS_FOUND}
                  title={'No Chats Found'}
                  subtitle={'No Conversation Found'}
                  noLoop
                />
              </Box>
            )}
            // scrollToBottomComponent={scrollToBottomComponent}
            // isTyping={true}
            onInputTextChanged={txt => changeTypingStatus(txt)}
            messages={messages}
            renderComposer={props => (
              <Composer
                {...props}
                textInputStyle={{fontFamily: 'Montserrat-Light'}}
              />
            )}
            renderSend={props => (
              <Send {...props} textStyle={{fontFamily: 'Montserrat-Medium'}} />
            )}
            renderBubble={props => (
              <Bubble
                {...props}
                wrapperStyle={{
                  left: {
                    backgroundColor: COLORS.primary[50],
                  },
                  right: {
                    backgroundColor: COLORS.primary[500],
                  },
                }}
              />
            )}
          />
        </>
      </Box>
    </>
  );
}
