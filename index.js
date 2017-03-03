var fs = require('fs');
var glob = require('glob');
var uncss = require('uncss');
var path = require('path');
var cssnano = require('cssnano');
var Minimize = require('minimize');
var mkdirp = require('mkdirp');

function writeFile(file) {
  var dir = path.dirname(file);
  mkdirp.sync(dir.replace(/src/, 'build'));
}

// find all index.html files
glob('src/**/*', (err, files) => {

  // make the folder structure in build
  files.forEach(f => writeFile(f));

  var css;

  css = fs.readFileSync('src/css/basscss.min.css', 'utf8');
  css += fs.readFileSync('src/css/basscss.min.css', 'utf8');

  var html = files.filter(f => f.match('.html'));

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

      if (!fs.existsSync(buildFolder)) {
        fs.mkdirSync(buildFolder);
      }

      var filename = file.replace(/src/, 'build');

      // check if it needs a subdirectory, and make it if so.
      var subdirectory = filename.match(/build\/(.*)\//);
      console.log(subdirectory);
      if (subdirectory) {
        if (!fs.existsSync(subdirectory)[0]) {
          fs.mkdirSync(subdirectory[0]);
          fs.writeFileSync(filename, html, 'utf8');
        }
      } else {
        fs.writeFileSync(filename, html, 'utf8');
      }
    });
  });
}
