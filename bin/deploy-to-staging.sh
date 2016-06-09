#!/bin/bash -e

# store current date string for unique filename purposes
current_date=$(date +%Y-%m-%dT%H-%M-%S)

# create the tarball and get the name of it
pkg_name=$(npm pack | tail -n 1 2>&1)
pkg_name_no_ext="${pkg_name%.*}"
pkg_ext="${pkg_name##*.}"

# append current date to package name for new name
new_pkg_name="${pkg_name_no_ext}_${current_date}.${pkg_ext}"

# rename package
mv "$pkg_name" "$new_pkg_name"

# copy package to staging server
scp "$new_pkg_name" root@staging.tillur.io:/root/tillur

# copy "deploy" script to staging server
scp bin/deploy.sh root@staging.tillur.io:/root/tillur

# run remote "deploy" script
ssh root@staging.tillur.io "cd /root/tillur; chmod +x deploy.sh; ./deploy.sh ${new_pkg_name}"
