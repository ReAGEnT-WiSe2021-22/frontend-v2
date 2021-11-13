#!/bin/sh

folder=$1

# Create direflow project
cd packages
direflow create --ts $folder

# Copy eslint configuraiton
touch ./$folder/.eslintrc.js
cat ./container/.eslintrc.js >> ./$folder/.eslintrc.js

cd $folder
# rm .eslintrc # Remove default eslint config

# Install dependencies
yarn add --dev eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
