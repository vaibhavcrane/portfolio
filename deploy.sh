echo "Switching to the master branch"
git checkout master

echo "Deploying app..."
scp -r /* rainman@172.105.20.187:/var/www/vaibhavrane.me/

echo "Done!"