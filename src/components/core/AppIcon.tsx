import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import IoniconsNames from 'react-native-vector-icons/glyphmaps/Ionicons.json';

import AntDesign from 'react-native-vector-icons/AntDesign';
import AntDesignNames from 'react-native-vector-icons/glyphmaps/AntDesign.json';

import Entypo from 'react-native-vector-icons/Entypo';
import EntypoNames from 'react-native-vector-icons/glyphmaps/Entypo.json';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import EvilIconsNames from 'react-native-vector-icons/glyphmaps/EvilIcons.json';

import Feather from 'react-native-vector-icons/Feather';
import FeatherNames from 'react-native-vector-icons/glyphmaps/Feather.json';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesomeNames from 'react-native-vector-icons/glyphmaps/FontAwesome.json';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Names from 'react-native-vector-icons/glyphmaps/FontAwesome5Free.json';

import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import FontAwesome5ProNames from 'react-native-vector-icons/glyphmaps/FontAwesome5Pro.json';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontistoNames from 'react-native-vector-icons/glyphmaps/Fontisto.json';

import Foundation from 'react-native-vector-icons/Foundation';
import FoundationNames from 'react-native-vector-icons/glyphmaps/Foundation.json';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIconsNames from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialIconsNames from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';

import Octicons from 'react-native-vector-icons/Octicons';
import OcticonsNames from 'react-native-vector-icons/glyphmaps/Octicons.json';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SimpleLineIconsNames from 'react-native-vector-icons/glyphmaps/SimpleLineIcons.json';

import Zocial from 'react-native-vector-icons/Zocial';
import ZocialNames from 'react-native-vector-icons/glyphmaps/Zocial.json';

import {ICONS} from '~/assets';

export type OtherIconProps = {
  IoniconsName: keyof typeof IoniconsNames;
  AntDesignName: keyof typeof AntDesignNames;
  EntypoName: keyof typeof EntypoNames;
  EvilIconsName: keyof typeof EvilIconsNames;
  FeatherName: keyof typeof FeatherNames;
  FontAwesomeName: keyof typeof FontAwesomeNames;
  FontAwesome5Name: keyof typeof FontAwesome5Names;
  FontAwesome5ProName: keyof typeof FontAwesome5ProNames;
  FontistoName: keyof typeof FontistoNames;
  FoundationName: keyof typeof FoundationNames;
  MaterialCommunityIconsName: keyof typeof MaterialCommunityIconsNames;
  MaterialIconsName: keyof typeof MaterialIconsNames;
  OcticonsName: keyof typeof OcticonsNames;
  SimpleLineIconsName: keyof typeof SimpleLineIconsNames;
  ZocialName: keyof typeof ZocialNames;
  name: keyof typeof ICONS;
};

export type IconKeys = keyof OtherIconProps;

export type IconProps = Omit<React.ComponentProps<typeof Ionicons>, 'name'> &
  Partial<OtherIconProps>;

export default function AppIcon({
  IoniconsName,
  AntDesignName,
  EntypoName,
  EvilIconsName,
  FeatherName,
  FontAwesomeName,
  FontAwesome5Name,
  FontAwesome5ProName,
  FontistoName,
  FoundationName,
  MaterialCommunityIconsName,
  MaterialIconsName,
  OcticonsName,
  SimpleLineIconsName,
  ZocialName,
  name,
  size = 24,
  color = 'black',
  ...props
}: IconProps) {
  if (IoniconsName)
    return (
      <Ionicons {...props} size={size} color={color} name={IoniconsName} />
    );
  if (AntDesignName)
    return (
      <AntDesign {...props} size={size} color={color} name={AntDesignName} />
    );
  if (EntypoName)
    return <Entypo {...props} size={size} color={color} name={EntypoName} />;
  if (EvilIconsName)
    return (
      <EvilIcons {...props} size={size} color={color} name={EvilIconsName} />
    );
  if (FeatherName)
    return <Feather {...props} size={size} color={color} name={FeatherName} />;
  if (FontAwesomeName)
    return (
      <FontAwesome
        {...props}
        size={size}
        color={color}
        name={FontAwesomeName}
      />
    );
  if (FontAwesome5Name)
    return (
      <FontAwesome5
        {...props}
        size={size}
        color={color}
        name={FontAwesome5Name}
      />
    );
  if (FontAwesome5ProName)
    return (
      <FontAwesome5Pro
        {...props}
        size={size}
        color={color}
        name={FontAwesome5ProName}
      />
    );
  if (FontistoName)
    return (
      <Fontisto {...props} size={size} color={color} name={FontistoName} />
    );
  if (FoundationName)
    return (
      <Foundation {...props} size={size} color={color} name={FoundationName} />
    );
  if (MaterialCommunityIconsName)
    return (
      <MaterialCommunityIcons
        {...props}
        size={size}
        color={color}
        name={MaterialCommunityIconsName}
      />
    );
  if (MaterialIconsName)
    return (
      <MaterialIcons
        {...props}
        size={size}
        color={color}
        name={MaterialIconsName}
      />
    );
  if (OcticonsName)
    return (
      <Octicons {...props} size={size} color={color} name={OcticonsName} />
    );
  if (SimpleLineIconsName)
    return (
      <SimpleLineIcons
        {...props}
        size={size}
        color={color}
        name={SimpleLineIconsName}
      />
    );
  if (ZocialName)
    return <Zocial {...props} size={size} color={color} name={ZocialName} />;
  if (name)
    return ICONS[name]({
      size,
      color: typeof color === 'string' ? color : '#000',
    });
  return null;
}
