# React Native Typescript Setup

## Setup Navigation

### Install Navigation Packages

```bash
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
```

### Install Pod for above dependencies

```bash
cd ios && arch -x86_64 pod install
```

### Set up `react-native-screens` by updating `android/app/src/main/java/<your package name>/MainActivity.java` file

```java
import android.os.Bundle;

public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}
```

### Install stack navigation

```bash
yarn add @react-navigation/native-stack
```

### Wrap the navigation with navigation container

```tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

### Install Drawer Navigation package & other dependencies

```bash
yarn add @react-navigation/drawer react-native-gesture-handler react-native-reanimated
cd ios && arch -x86_64 pod install
```

### Setup `react-native-gesture-handler` in `index.js`

```js
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler'; // this line add
AppRegistry.registerComponent(appName, () => App);
```

### Settings up `react-native-reanimated/plugin`

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'], // this line add
};
```

### Reset the server cache

```bash
yarn start --reset-cache
```

### Install Bottom Navigation package

```bash
yarn add @react-navigation/bottom-tabs
```

### Setup absolute imports

#### Install `babel-plugin-module-resolver`

```bash
yarn add -D babel-plugin-module-resolver
```

#### Update the `babel.config.js` file

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/components': './src/components',
          '~/components/core': './src/components/core',
          '~/components/containers': './src/components/containers',
          '~/components/shared': './src/components/shared',
          '~/configs': './src/configs',
          '~/constant': './src/constant',
          '~/hooks': './src/hooks',
          '~/routes': './src/routes',
          '~/screens': './src/screens',
          '~/styles': './src/styles',
          '~/types': './src/types',
        },
      },
    ],
  ],
};
```

#### Update `tsconfig.json` file

```json
{
  "extends": "@tsconfig/react-native/tsconfig.json",
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
```

### Install lottie animation library

```bash
yarn add lottie-react-native lottie-ios@3.4.0
```

### Install Image Picker library

#### Install `react-native-image-crop-picker` library

```bash
yarn add react-native-image-crop-picker
```

#### Update permissions in `AndroidManifest.xml` file for android

```xml
<!-- Camera permission required to access picture from camera -->
<uses-permission android:name="android.permission.CAMERA" />
```

#### Update permission in `info.plist` for ios

```plist
<key>NSPhotoLibraryUsageDescription</key>
<string>This app uses the gallery to update photo of your profile</string>
<key>NSCameraUsageDescription</key>
<string>This app uses the camera to take pictures for updating profile photo</string>
```

### Add Custom Font Family To Your Application

#### Create a file named `react-native.config.js`

```js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts'], // path to the fonts directory
};
```

#### Run the following command to add all the assets to both the platforms

```bash
npx react-native-asset
```

### Install vector icons

#### Install `react-native-vector-icons` and its types

```bash
yarn add react-native-vector-icons
yarn add -D @types/react-native-vector-icons
```

#### For android open `android/app/build.gradle` and add following

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

#### Update following in `info.plist` for ios

```plist
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
  <string>Fontisto.ttf</string>
</array>
```

#### Install Pod

```bash
cd ios && arch -x86_64 pod install --repo-update && cd ..
```
