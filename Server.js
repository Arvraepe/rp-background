require('app-module-path').addPath(`${__dirname}/src`);

global.WDIR = __dirname;

const Express = require('express');
const App = Express();
const Http = require('http').Server(App);
const IO = require('socket.io')(Http);

App.use(require('cors')());
App.use(require('body-parser').json());

App.use(Express.static('html'));

IO.on('connect', (socket) => {

    socket.on('set-image-background', (background) => {
        IO.emit('update-image-background', background);
    });

    socket.on('set-image-update', (data) => {

        IO.emit('update-image', data);
    })

});

require('routes/ImageRoutes')(App, IO);

Http.listen(9220, () => console.log('Started server :9220'));
