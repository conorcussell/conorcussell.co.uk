var gm = require('gm');

gm('img/sofar/events.jpg')
    .resize(15, 15)
    .toBuffer('GIF', function (error, buffer) {
        console.log('data:image/gif;base64,' + buffer.toString('base64'));
    });
