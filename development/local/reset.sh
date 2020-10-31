#!/usr/bin/env bash

if [ $# -ne 3 ]
  then
    echo "Please provide the required arguments."
    echo "Usage example: ./reset.sh dbUser dbPass dbName"
    exit
fi

dbUser=$1
dbPass=$2
dbName=$3

path_to_script=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd ${path_to_script}
cd '../..'

echo 'Drop the current database ...'
mysql -h127.0.0.1 -u $dbUser -p$dbPass -e "DROP DATABASE $dbName;"
echo 'Recreate the database previously dropped ...'
mysql -h127.0.0.1 -u $dbUser -p$dbPass -e "CREATE DATABASE $dbName CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
echo 'Populate the newly created database ...'
mysql -h127.0.0.1 -u $dbUser -p$dbPass -D $dbName < "$path_to_script/default.sql"

echo 'Run composer install ...'
composer install
echo 'Perform drupal database updates ...'
drush updb -y
echo 'Synchronise configs ...'
drush cim -y
echo 'Clear all caches again ...'
drush cr
echo 'Change admin password..'
drush upwd super_admin admin

echo 'Done!'

