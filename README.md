# `React Native TypeScript Stater Project`

## Creating a basic folder structure

```sh
mkdir -p src/{assets,components,configs,constant,contexts,hooks,layouts,routes,screens,styles,types,utils}
mkdir -p src/assets/{animations,fonts,icons,images}
mkdir -p src/components/core
mkdir -p src/screens/{auth,private,public,common}
mkdir -p src/routes/{private,public}
```

## Creating all basic files and index files for each folder

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
