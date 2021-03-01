#!/bin/bash

#Shell Script to easily set file permissions
echo "Changing directory permissions..."
find /var/www/html/cse30246/whalewatchr -type d -exec chmod 755 {} +
echo "Done"
echo "Changing file Permissions..."
find /var/www/html/cse30246/whalewatchr -type f -exec chmod 644 {} +
echo "Done"
