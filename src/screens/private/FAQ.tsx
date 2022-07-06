import {useNavigation} from '@react-navigation/native';
import {ANIMATIONS} from 'assets';
import {FAQItem} from 'components';
// import {FAQItem} from 'components';
import {Empty} from 'components/core';
import {Box, FlatList} from 'native-base';
import React from 'react';

import {StackAndTabType} from 'routes';

export default function FAQs() {
  const navigation = useNavigation<StackAndTabType>();

  return (
    <>
      <Box
        minH={'full'}
        bg={{
          linearGradient: {
            colors: ['primary.100', 'primary.50'],
            start: [0, 1],
            end: [1, 0],
          },
        }}>
        <>
          <FlatList
            _contentContainerStyle={{
              py: '2',
              px: '2',
            }}
            // refreshing={isLoading}
            // onRefresh={() => refetch()}
            data={[2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={({item, index}) => (
              <FAQItem
                show={index === 0}
                question={'item.question'}
                answer={'item.answer'}
              />
            )}
            ListEmptyComponent={
              <Empty
                animation={ANIMATIONS.FAQ}
                title={'No FAQ Found'}
                subtitle={'No FAQs Available To Show'}
              />
            }
            keyExtractor={(_, index) => index.toString()}
          />
        </>
      </Box>
    </>
  );
}
