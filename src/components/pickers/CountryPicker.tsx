import {ICONS} from 'assets';
import {COUNTRIES} from 'constant';
import {Box, Heading, Input, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Country} from 'types';
type Props = {
  visible: boolean;
  onSelect: (country: Country) => void;
  onClose: () => void;
};

export default ({onClose, onSelect, visible}: Props) => {
  const [searchTxt, setSearchTxt] = useState('');
  const [searchRes, setSearchRes] = useState(() => COUNTRIES);
  useEffect(() => {
    if (searchTxt) {
      const resArr = COUNTRIES?.filter(item =>
        item?.code?.toLowerCase().includes(searchTxt.toLowerCase()),
      );
      setSearchRes(resArr);
    } else {
      setSearchRes(COUNTRIES);
    }
  }, [searchTxt]);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => onClose()}>
        <TouchableWithoutFeedback onPress={() => onClose()}>
          <SafeAreaView style={styles.container}>
            <VStack w="100%" space={5} alignSelf="center">
              <Heading fontSize="lg">Select Your Country Code</Heading>
              <Input
                placeholder="Search by country name"
                width="100%"
                borderRadius="4"
                py="3"
                px="1"
                fontSize="14"
                InputLeftElement={
                  <Box>
                    <ICONS.Search />
                  </Box>
                }
                value={searchTxt}
                onChangeText={setSearchTxt}
              />
            </VStack>

            <FlatList
              keyboardShouldPersistTaps="always"
              data={searchRes}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.flagWrapper}
                  onPress={() => onSelect(item)}>
                  <Image
                    source={{
                      uri: `https://flagcdn.com/w20/${item.code.toLowerCase()}.png`,
                    }}
                    style={styles.flag}
                  />
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.code}
              showsVerticalScrollIndicator={false}
            />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  flag: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  flagWrapper: {padding: 10, flexDirection: 'row'},
  container: {
    flex: 1,
    padding: 10,
  },
});
