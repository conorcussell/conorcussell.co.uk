# conorcussell.co.uk
Source for personal website

This isn't very exciting, but it does score 100/100 on lighthouse

features some:

1. plain ol' CSS
2. a tiny bit of old af JavaScript
3. this [file](https://github.com/conorcussell/conorcussell.co.uk/blob/master/index.js) does all the building
  - copy across files
  - minify js
  - run [uncss](https://github.com/giakki/uncss) over each `index.html` file and inline the result
  - find all images - create a 3x3 version and base64 encode it for lazy loading
4. a service worker caches stuff. 
