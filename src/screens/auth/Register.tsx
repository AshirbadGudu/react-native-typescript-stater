import React, {useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Box,
  Center,
  Checkbox,
  HStack,
  Heading,
  IInputProps,
  Image,
  Link,
  ScrollView,
  Text,
  useColorModeValue,
  useToast,
} from 'native-base';
import {useForm} from 'react-hook-form';
import {ICONS, IMAGES} from '~/assets';
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

export default function Register(): JSX.Element {
  const toast = useToast();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<PublicRoutesTypes>>();

  const bg = useColorModeValue('black', 'white');

  const handleRegistration = (data: FormData) => {
    try {
      toast.show({
        title: true ? 'Registration Successful!' : 'Registration Failed',
        duration: 5000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formInputs: FormInput[] = useMemo(
    () => [
      {
        key: 'name',
        label: 'Name',
        placeholder: 'Enter your full name',
        icon: {AntDesignName: 'user'},
        rules: {
          required: 'Fullname is required',
        },
        inputProps: {autoCapitalize: 'none', marginBottom: '2'},
      },
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
        inputProps: {
          keyboardType: 'email-address',
          autoCapitalize: 'none',
          marginBottom: '2',
        },
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        bg="white"
        _dark={{bg: 'dark.100'}}>
        <Center flexGrow={1} px="5" py="8" w="full">
          <Image
            width="60"
            height="60"
            my="15"
            source={IMAGES.LOGO}
            alt="logo"
          />
          <Heading mt="5" mb="4" fontSize="26" fontWeight="500" color={bg}>
            Create Your Account{' '}
          </Heading>
          {formInputs.map(input => (
            <AppInput
              input={input}
              key={input.key}
              control={control}
              errorMessage={errors?.[input?.key]?.message}
            />
          ))}
          <Checkbox
            fontSize="10"
            value="true"
            mt="2"
            mb="5"
            borderColor={bg}
            borderRadius="6">
            Remember me
          </Checkbox>
          <Btn onPress={handleSubmit(handleRegistration)}>Sign up</Btn>
          <Box alignItems="center" w="100%">
            <Text color={bg} fontSize="16" fontWeight="400" mt="4">
              or continue with
            </Text>
            <HStack space={4} mt="6" mb="6">
              <Link
                isUnderlined={false}
                href="#"
                borderColor="#f2f2f2"
                borderWidth="1.5"
                px="6"
                py="3"
                borderRadius="10">
                <ICONS.Facebook color="#3b5998" />
              </Link>
              <Link
                isUnderlined={false}
                href="#"
                borderColor="#f2f2f2"
                borderWidth="1.5"
                px="6"
                py="3"
                borderRadius="10">
                <ICONS.Email color="#BB001B" />
              </Link>
              <Link
                isUnderlined={false}
                href="#"
                borderColor="#f2f2f2"
                borderWidth="1.5"
                px="6"
                py="3"
                borderRadius="10">
                <ICONS.LinkedIn color="#0A66C2" />
              </Link>
            </HStack>
            <Box alignItems="center" flexDirection="row">
              <Text color={bg} fontSize="16" fontWeight="400">
                Already have an account?
              </Text>
              <Btn
                colors={['#fff', '#fff']}
                _text={{color: 'black', fontSize: 'sm'}}
                onPress={() => navigate('Login')}>
                Login
              </Btn>
            </Box>
          </Box>
        </Center>
      </ScrollView>
    </>
  );
}
