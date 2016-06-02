# this script returns a fail exit code if we are not in the staging branch
# we use this script to ensure that `npm version` is only run on staging

echo 'checking to make sure we are in the "master" branch'
[[ $(git rev-parse --abbrev-ref HEAD) == "master" ]]
exit
