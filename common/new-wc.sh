#!/bin/sh

folder=$1

# Create direflow project
cd packages
direflow create --ts $folder

# Copy eslint configuraiton
touch ./$folder/.eslintrc.js

cd $folder
# rm .eslintrc # Remove default eslint config

# Install dependencies
yarn add --dev eslint@8.2.0 @typescript-eslint/eslint-plugin@5.3.1 @typescript-eslint/parser@5.3.1 eslint-config-airbnb@19.0.0  eslint-plugin-import@2.25.3 eslint-plugin-jsx-a11y@6.5.1 eslint-plugin-react@7.27.0 eslint-plugin-react-hooks@4.3.0
yarn 

cat ../container/.eslintrc.js >> ./.eslintrc.js