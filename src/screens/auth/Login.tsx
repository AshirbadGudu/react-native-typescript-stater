import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Box,
  Center,
  IInputProps,
  Image,
  ScrollView,
  useToast,
} from 'native-base';
import React, {useMemo, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useWindowDimensions} from 'react-native';
import {IMAGES} from '~/assets';
import {AppInput, Btn} from '~/components/core';
import {IconProps} from '~/components/core/AppIcon';
import {PublicRoutesTypes} from '~/routes';

type FormInput = {
  key: string;
  label: string;
  placeholder: string;
  icon: IconProps;
  rules: Object;
  inputProps?: IInputProps;
};

type FormData = {
  [key: string]: string;
};

export default function Login(): JSX.Element {
  const toast = useToast();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<PublicRoutesTypes>>();
  const {height} = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const handleLogin = async ({username, password}: FormData) => {
    try {
      toast.show({
        title: true ? 'Login Successful!' : 'Login Failed',
        duration: 5000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formInputs: FormInput[] = useMemo(
    () => [
      {
        key: 'username',
        label: 'Email',
        placeholder: 'Username',
        icon: {FeatherName: 'mail'},
        rules: {
          required: 'Username is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        },
        inputProps: {keyboardType: 'email-address', autoCapitalize: 'none'},
      },
      {
        key: 'password',
        label: 'Password',
        placeholder: 'Password',
        icon: {FeatherName: 'lock'},
        rules: {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
          },
        },
        inputProps: {
          secureTextEntry,
          rightElement: (
            <Btn
              colors={['#fff', '#fff']}
              _text={{color: 'black', fontSize: 'xs'}}
              onPress={() => setSecureTextEntry(!secureTextEntry)}>
              {secureTextEntry ? 'Show' : 'Hide'}
            </Btn>
          ),
        },
      },
    ],
    [secureTextEntry],
  );

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} bg="white">
        <Center h={height} px="4">
          <Image
            source={IMAGES.LOGO}
            resizeMode={'contain'}
            w={'full'}
            h="20"
            alt="Logo"
            my="2"
          />
          {formInputs.map(input => (
            <AppInput
              input={input}
              key={input.key}
              control={control}
              errorMessage={errors?.[input?.key]?.message}
            />
          ))}
          <Box w="full">
            <Btn
              colors={['#fff', '#fff']}
              _text={{color: 'black', fontSize: 'sm'}}
              alignSelf={'flex-end'}
              onPress={() => navigate('ForgotPassword')}>
              Forgot Password?
            </Btn>
          </Box>
          <Btn
            colors={['primary.500', 'lightBlue.600']}
            onPress={handleSubmit(handleLogin)}
            my="4"
            icon={{FeatherName: 'log-in'}}>
            Login
          </Btn>
          <Box w="full">
            <Btn
              colors={['#fff', '#fff']}
              _text={{color: 'black', fontSize: 'sm'}}
              onPress={() => navigate('Register')}>
              Click Here To Create New Account
            </Btn>
          </Box>
        </Center>
      </ScrollView>
    </>
  );
}
