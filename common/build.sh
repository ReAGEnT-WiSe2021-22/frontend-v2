#!/bin/sh

home_dir=`pwd` 
folder=$1
echo "$home_dir/packages/$folder"

if [ -d "$home_dir/packages/$folder" ]; then
 cd ./packages/$folder
 npm run build

 cd $home_dir
 bundle_path="./packages/build/$folder.js"
 touch $bundle_path
 cp ./packages/$folder/build/direflowBundle.js $bundle_path
else 
 echo "Folder doesn't exist"
 exit 1
fi
