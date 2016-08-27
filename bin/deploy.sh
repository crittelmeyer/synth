#!/bin/bash -l

# store first arg as filename
filename=$1

# kill current hive processes
ps aux | grep hive | grep -v grep | awk '{print $2}' | xargs kill -9

# delete old package
rm -rf package

# untar package
tar -xvzf $1

# install new package
cd package; npm install

# build and deploy dist folder
npm run deploy:prod

# start server
export NODE_ENV=production; npm start &> nodejs.log &
