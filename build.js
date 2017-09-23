const fs = require('fs');
const glob = require('glob');
const uncss = require('uncss');
const path = require('path');

glob('build/**/index.html', (err, files) => {
  if (err) {
    throw new Error(err);
  }

  files.forEach(file => build(file));
});

function build(file) {
  const options = {
    htmlroot: path.join(__dirname, 'build'),
    cssPath: '/',
    timeout: 1000,
    report: false
  };

  uncss([file], options, (err, output) => {
    if (err) {
      throw new Error(err);
    }

    // remove uncss comment
    output = output.replace(/(\/\*\*\*(.*?)\*\*\*\/|)/, '');
    // remove tachyons comment
    // remove normalize comment
    output = output.replace(/\/\*!(.*?)\*\//g, '');

    let html = fs.readFileSync(file, 'utf-8');
    let inline = `<style>${output}</style>`;

    html = html.replace(/<link href="(.*?)" rel="stylesheet">/, inline);
    fs.writeFileSync(file, html, 'utf8');
  });
}
