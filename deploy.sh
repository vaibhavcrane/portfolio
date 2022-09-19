echo "Switching to the master branch"
git checkout master

echo "Building app..."
npm run build

echo "Deploying app..."
scp -r build/* rainman@172.105.20.187:/var/www/vaibhavrane.me/

echo "Done!"