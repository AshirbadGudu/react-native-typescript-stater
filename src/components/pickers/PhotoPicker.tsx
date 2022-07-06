import {useIsMounted} from 'hooks';
import {
  Actionsheet,
  Avatar,
  Heading,
  Pressable,
  useDisclose,
} from 'native-base';
import React from 'react';
import ImageCropPicker, {ImageOrVideo} from 'react-native-image-crop-picker';

type Props = {
  setProfilePic: any;
  profilePic?: ImageOrVideo;
  alt: string;
  initialPhoto?: string;
};

export default ({setProfilePic, initialPhoto, profilePic, alt}: Props) => {
  const {isOpen, onOpen, onClose} = useDisclose();
  const isMounted = useIsMounted();

  return (
    <>
      <Pressable onPress={onOpen}>
        {profilePic?.path ? (
          <Avatar
            alignSelf="center"
            size="2xl"
            source={{uri: profilePic?.path}}
          />
        ) : initialPhoto ? (
          <Avatar alignSelf="center" size="2xl" source={{uri: initialPhoto}} />
        ) : (
          <Avatar alignSelf="center" size="2xl" bg="primary.500">
            {alt}
          </Avatar>
        )}
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Heading my="2">Choose Profile Pic</Heading>
          <Actionsheet.Item
            onPress={() => {
              ImageCropPicker.openCamera({
                cropping: true,
                cropperCircleOverlay: true,
                compressImageQuality: 0.2,
              })
                .then(image => {
                  isMounted.current && setProfilePic(image);
                  isMounted.current && onClose();
                })
                .catch(e => console.log(e));
            }}>
            Camera
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={() => {
              ImageCropPicker.openPicker({
                cropping: true,
                cropperCircleOverlay: true,
                compressImageQuality: 0.2,
              })
                .then(image => {
                  isMounted.current && setProfilePic(image);
                  isMounted.current && onClose();
                })
                .catch(e => console.log(e));
            }}>
            Gallery
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
