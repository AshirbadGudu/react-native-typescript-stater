import {Box, FormControl, IInputProps, Input, useColorMode} from 'native-base';
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {ICONS} from '~/assets';
import AppIcon, {IconProps} from './AppIcon';
import {fontFamily} from '../../../app.json';

type Props = {
  input: {
    key: string;
    label: string;
    placeholder: string;
    icon: IconProps;
    rules: Object;
    inputProps?: IInputProps;
  };
  errorMessage?: string;
  control: Control<any, any>;
};

export default function AppInput({
  input,
  errorMessage,
  control,
}: Props): JSX.Element {
  const {colorMode} = useColorMode();
  return (
    <Controller
      control={control}
      name={input.key}
      rules={input.rules}
      render={({field: {onBlur, onChange, value}}) => (
        <FormControl isInvalid={Boolean(errorMessage)} my={'1'}>
          <FormControl.Label
            _text={{
              style: {fontFamily: `${fontFamily}-Regular`},
            }}>
            {input.label}
          </FormControl.Label>
          <Input
            placeholder={input.placeholder}
            w="full"
            InputLeftElement={
              <Box pl="2">
                {
                  <AppIcon
                    {...input.icon}
                    color={colorMode === 'dark' ? 'white' : 'black'}
                    size={20}
                  />
                }
              </Box>
            }
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            {...input.inputProps}
          />
          <FormControl.ErrorMessage
            leftIcon={<ICONS.Info color={'#f00'} size={12} />}>
            {errorMessage}
          </FormControl.ErrorMessage>
        </FormControl>
      )}
    />
  );
}
