#!/bin/bash

# default push location
REMOTE="origin"
BRANCH="master"

# custom checking for origin and master
if [ $# -eq "2" ]
then
  REMOTE=$1
  BRANCH=$2
elif [ $# -eq "1" ]
then
  REMOTE=$1
elif [ $# -gt "2" ]
then
  echo "Invalid usage of the script"
  echo "usage: ./git.sh [origin] [branch]"
  exit 1
fi

# Git commit message
read -p "Enter commit message here: " MSG

# Git commands
git add .
git commit -m "$MSG"
git push $REMOTE $BRANCH