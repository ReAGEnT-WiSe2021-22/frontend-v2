#!/bin/sh

home_dir=`pwd` 
folder=$1

if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    exit 1
fi

if [ -d "$home_dir/packages/$folder" ]; then
 cd ./packages/$folder
 npm run build

 if [ $folder != "container" ]; then
  cd $home_dir
  wc_path="packages/container/src/wc"
  bundle_path="./$wc_path/$folder.js"
  touch $bundle_path
  cp ./packages/$folder/build/direflowBundle.js $bundle_path

  echo "Build file copied to $bundle_path"
 elif 
  echo "Container built"
 fi
    
else 
 echo "Folder doesn't exist"
 exit 1
fi
