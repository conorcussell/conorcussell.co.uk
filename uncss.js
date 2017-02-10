var uncss = require('uncss');

var files = ['index.html'];
var options = {
  stylesheets  : ['basscss.min.css', 'style.css'],
  timeout      : 1000,
  report       : false
};

uncss(files, options, function (error, output) {
    console.log(output);
});
