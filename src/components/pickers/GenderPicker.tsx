import {ICONS} from 'assets';
import {
  Box,
  Input,
  Pressable,
  Heading,
  useDisclose,
  Actionsheet,
} from 'native-base';
import React from 'react';
import {Gender} from 'types';
type Props = {
  value?: Gender;
  onChange: (value: Gender) => void;
};
export default function GenderPicker({value, onChange}: Props) {
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <>
      <Pressable w="full" onPress={onOpen} mt={3}>
        <Input
          // size="xl"
          fontSize={14}
          InputLeftElement={
            <Box pl="2">
              <ICONS.Gender />
            </Box>
          }
          InputRightElement={<ICONS.ChevronRight />}
          placeholder={'Select Your Gender'}
          w="full"
          value={value}
          isDisabled
          _disabled={{opacity: 1, placeholderTextColor: 'gray'}}
        />
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Heading my="3" fontWeight={'semibold'} size={'sm'}>
            {'Select Your Gender'}
          </Heading>
          <Actionsheet.Item
            onPress={() => {
              onChange('Male');
              onClose();
            }}>
            {'Male'}
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={() => {
              onChange('Female');
              onClose();
            }}>
            {'Female'}
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={() => {
              onChange('Other');
              onClose();
            }}>
            {'Other'}
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
