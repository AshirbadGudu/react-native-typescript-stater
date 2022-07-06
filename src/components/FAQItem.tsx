import {ICONS} from 'assets';
import {Pressable, Row, Center, Heading} from 'native-base';
import React, {useState} from 'react';

type Props = {
  show: boolean;
  question: string;
  answer: string;
};

export default function FAQItem({answer, question, show}: Props) {
  const [visible, setVisible] = useState(() => show);
  return (
    <>
      <Pressable
        onPress={() => setVisible(pre => !pre)}
        my="2"
        bg="primary.50"
        shadow={'4'}
        rounded="md">
        <Row
          space={'0.5'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Row alignItems="center">
            <Center p="3">
              <ICONS.Help size={32} />
            </Center>
            <Heading
              maxW="64"
              numberOfLines={2}
              ellipsizeMode={'tail'}
              fontSize={'md'}
              fontWeight={!visible ? 'medium' : 'semibold'}>
              {question}
            </Heading>
          </Row>
          <Center p="3">
            {!visible ? (
              <ICONS.CaretDown />
            ) : (
              <ICONS.Close onPress={() => setVisible(pre => !pre)} />
            )}
          </Center>
        </Row>
        {visible && (
          <Heading
            px="8"
            pb="4"
            ellipsizeMode={'tail'}
            fontSize={'sm'}
            fontWeight={'medium'}>
            {answer}
          </Heading>
        )}
      </Pressable>
    </>
  );
}
