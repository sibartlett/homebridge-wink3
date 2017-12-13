rm -rf _book
gitbook build
cd _book
git init
git remote add origin git@github.com:sibartlett/homebridge-wink3.git
git checkout -b gh-pages
git add .
git commit -m "Update docs"
git push --set-upstream origin gh-pages -f
