#!/bin/sh

for D in ./packages/*; do 
  if [ -d "${D}" ]; then
   app_name=`basename $D`

   if [[ ($app_name != "build") && ($app_name != "container") ]]; then
    echo "d: $D"
    echo "basename: $app_name"
    yarn build $app_name
   fi
  fi
done
