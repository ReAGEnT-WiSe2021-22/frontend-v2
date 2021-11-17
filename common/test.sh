#!/bin/sh

home=`pwd`

for D in ./packages/*; do
 if [ -d "${D}" ]; then
  cd $D
  CI=true yarn test

  if [ $? -eq 1 ]; then
   echo "Test failed!"
   exit 1
  fi

  cd $home
 fi 
done

exit 0