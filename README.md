# `React Native TypeScript Stater Project`

## Let's set up the project

### Creating a basic folder structure

```sh
mkdir -p src/{assets,components,configs,constant,contexts,hooks,layouts,routes,screens,styles,types,utils}
mkdir -p src/assets/{animations,fonts,icons,images}
mkdir -p src/components/core
mkdir -p src/screens/{auth,private,public,common}
mkdir -p src/routes/{private,public}
```

### Creating all basic files and index files for each folder

```sh
touch src/Router.tsx
cd src
for dir in *; do [ -d "$dir" ] && echo "export {};" >> "$dir/index.ts" ; done
cd assets
for dir in *; do [ -d "$dir" ] && echo "export {};" >> "$dir/index.ts" ; done
cd ../components
for dir in *; do [ -d "$dir" ] && echo "export {};" >> "$dir/index.ts" ; done
cd ../screens
for dir in *; do [ -d "$dir" ] && echo "export {};" >> "$dir/index.ts" ; done
cd ../routes
for dir in *; do [ -d "$dir" ] && echo "export {};" >> "$dir/index.ts" ; done
```

### Create absolute paths for your project

- **Install `babel-plugin-module-resolver` as a devDependency**

```sh
yarn add -D babel-plugin-module-resolver
```

- **Add the following code to the `babel.config.js` file**

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          'components/core': './src/components/core',
          configs: './src/configs',
          constant: './src/constant',
          contexts: './src/contexts',
          hooks: './src/hooks',
          layouts: './src/layouts',
          routes: './src/routes',
          screens: './src/screens',
          styles: './src/styles',
          types: './src/types',
          utils: './src/utils',
        },
      },
    ],
  ],
};
```

- **Add the following code to the `tsconfig.json` file**

```json
"baseUrl": "./",
"paths": {
  "assets": ["src/assets"],
  "components": ["src/components"],
  "components/core": ["src/components/core"],
  "configs": ["src/configs"],
  "contexts": ["src/contexts"],
  "constant": ["src/constant"],
  "hooks": ["src/hooks"],
  "layouts": ["src/layouts"],
  "routes": ["src/routes"],
  "screens": ["src/screens"],
  "styles": ["src/styles"],
  "utils": ["src/utils"],
  "types": ["src/types"]
},
```

- Restart the metro server for the changes to take effect

```sh
yarn start --reset-cache
```

### Configure custom fonts in the project

- **Create `react-native.config.js` file in the root of your project**

```sh
touch react-native.config.js
```

- **Add the following code to the file**

```js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts'],
};
```

### Add some commonly required react native packages

- **Install the following packages with `yarn`**

```sh
yarn add react-native-svg react-native-linear-gradient react-native-image-crop-picker react-native-sms-retriever lottie-ios lottie-react-native @react-native-async-storage/async-storage @react-native-community/netinfo @react-native-community/clipboard
```

- **Install the pod dependencies for IOS**

```sh
npx pod-install
```

### Install native-base and its dependencies

- **Install the packages with `yarn`**

```sh
yarn add native-base react-native-safe-area-context
```

- **Install the pod dependencies for IOS**

```sh
npx pod-install
```

### Install `react-navigation` and its dependencies

- **Install the core react-navigation packages with `yarn`**

```sh
yarn add @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer
```

- **Install `react-native-gesture-handler` with `yarn`**

```sh
yarn add react-native-gesture-handler
```

- **Install `react-native-screens` with `yarn`**

```sh
yarn add react-native-screens
```

- **Add the following code to the body of `android/app/src/main/java/<package-name>/MainActivity.java`**

```java
// ...
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

- **Install `react-native-reanimated` with `yarn`**

```sh
yarn add react-native-reanimated
```

- **Add Reanimated's babel plugin to your `babel.config.js`**

```js
module.exports = {
  // ...
  plugins: [
    // ...
    'react-native-reanimated/plugin',
  ],
};
```

- **Install the pod dependencies for IOS**

```sh
npx pod-install
```
