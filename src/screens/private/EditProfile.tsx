import {ICONS} from 'assets';
import {PhotoPicker, GenderPicker} from 'components/pickers';
import {useIsMounted, useAuth} from 'hooks';
import {
  Box,
  ScrollView,
  Button,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
} from 'native-base';
import React, {useState} from 'react';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {Gender} from 'types';

export default function EditProfile() {
  const isMounted = useIsMounted();
  const {user} = {
    user: {
      name: 'Jhon Doe',
      email: 'Jhon@gmail.com',
      photoURL: 'https://randomuser.me/api/portraits/men/46.jpg',
      gender: 'Male' as Gender,
      phoneNumber: '7008614546',
    },
  };
  // useAuth(state => state);
  const [profilePic, setProfilePic] = useState<ImageOrVideo>();
  const [email, setEmail] = useState<string | undefined>(user?.email);
  const [name, setName] = useState<string | undefined>(user?.name);
  const [gender, setGender] = useState<Gender | undefined>(() => user?.gender);

  const updateProfileInformation = async () => {};
  return (
    <>
      <Box
        minH={'full'}
        bg={{
          linearGradient: {
            colors: ['primary.50', 'primary.100'],
            start: [1, 0],
            end: [1, 1],
          },
        }}>
        <ScrollView>
          <Center h="full" py="3">
            <PhotoPicker
              initialPhoto={user?.photoURL}
              profilePic={profilePic}
              setProfilePic={setProfilePic}
              alt={user?.name?.charAt(0) || ''}
            />
            <Heading my="2">{user?.name}</Heading>
            <Heading fontWeight={'medium'} size="sm">
              Change the details to update profile
            </Heading>
            <VStack p="4">
              <FormControl mb="2">
                <FormControl.Label>Name</FormControl.Label>
                <Input
                  size="xl"
                  InputLeftElement={
                    <Box pl="2">
                      <ICONS.User />
                    </Box>
                  }
                  placeholder="Your Full Name"
                  w="full"
                  value={name}
                  onChangeText={setName}
                />
              </FormControl>
              <FormControl mb="2">
                <FormControl.Label>Phone</FormControl.Label>
                <Input
                  size="xl"
                  InputLeftElement={
                    <Box pl="2">
                      <ICONS.Phone />
                    </Box>
                  }
                  placeholder="Your Phone Number"
                  w="full"
                  defaultValue={user?.phoneNumber}
                  keyboardType="numeric"
                  isDisabled={true}
                />
              </FormControl>
              <FormControl mb="2">
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  size="xl"
                  InputLeftElement={
                    <Box pl="2">
                      <ICONS.Email />
                    </Box>
                  }
                  placeholder="Your Email Address"
                  w="full"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
              </FormControl>
              <FormControl mb="2">
                <FormControl.Label>Gender</FormControl.Label>
                <GenderPicker
                  onChange={selectedGender => setGender(selectedGender)}
                  value={gender}
                />
              </FormControl>
            </VStack>
            <Button onPress={updateProfileInformation}>
              Update Information
            </Button>
          </Center>
        </ScrollView>
      </Box>
    </>
  );
}
