var fs = require('fs');
var glob = require('glob');
var uncss = require('uncss');
var path = require('path');
var cssnano = require('cssnano');
var Minimize = require('minimize');
var mkdirp = require('mkdirp');
var UglifyJS = require('uglify-js');

function createFolder(file) {
  var dir = path.dirname(file);
  mkdirp.sync(dir.replace(/src/, 'build'));
}

// find all index.html files
glob('src/**/*', (err, files) => {

  // make the folder structure in build
  files.forEach(f => createFolder(f));

  // filter out images and move them to build folder
  files.filter(f => f.match(/(img)/) && !fs.statSync(f).isDirectory()).forEach(f => {
    fs.createReadStream(f).pipe(fs.createWriteStream(f.replace(/src/, 'build')));
  });

  // get javascript, minify and move to build folder
  files.filter(f => f.match(/(.js)/) && !fs.statSync(f).isDirectory()).forEach(f => {
    var result = UglifyJS.minify(f);
    fs.writeFileSync(f.replace(/src/, 'build'), result.code);
  });

  // get the css
  var css;

  css = fs.readFileSync('./src/css/basscss.min.css', 'utf8');
  css += fs.readFileSync('./src/css/style.css', 'utf8');

  var html = files.filter(f => f.match('.html'));

  // optimise each html page
  html.forEach(f => build(f, css));
});

function build(file, css) {
  var options = {
    raw: css,
    timeout: 1000,
    report: false,
    ignoreSheets: [/.css/]
  };

  uncss([file], options, function (error, output) {
    if (error) {
      console.log(error);
    }
    // minify the output and write it to build folder?
    // console.log(output);
    cssnano.process(output).then(function (result) {
      var style =
      `<style>
        ${result.css}
      </style>
      </head>`;
      var html = fs.readFileSync(file, 'utf-8');
      html = html.replace(/<link rel="stylesheet" type="text\/css" href="\/css\/(style|basscss.min).css"\/>/g, '');
      html = html.replace(/<\/head>/, style);

      // minify the html;
      html = new Minimize().parse(html);
      var filename = file.replace(/src/, 'build');

      fs.writeFileSync(filename, html, 'utf8');
    });
  });
}
