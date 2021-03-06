#!/bin/sh

for D in ./packages/*; do 
  if [ -d "${D}" ]; then
   app_name=`basename $D`

   if [ $app_name != "build" ] && [ $app_name != "container" ] && [ $app_name != "backend" ]; then
    REACT_APP_ENVIRONMENT=production yarn build $app_name
   fi
  fi
done
