var fs = require('fs');
var glob = require('glob');
var uncss = require('uncss');
var path = require('path');
var cssnano = require('cssnano');
var Minimize = require('minimize');
var buildFolder = './build';

// find all index.html files
glob('src/**/index.html', (err, files) => {
  fs.readFile('src/css/basscss.min.css', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    css = data;
    fs.readFile('src/css/style.css', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }
      css += data;
      files.forEach(file => {
        console.log(file);

        // run uncss, minify, strip out links to stylesheets, inline styles, minify html and write to build folder.
        prepareStyles(file, css);
      });
    });
  });
});

function prepareStyles(file, css) {
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
