const ImageRepository = require('repositories/ImageRepository');

module.exports = (App, IO) => {

    App.get('/api/images/', (req, res) => {
        const images = ImageRepository.getAll();

        res.status(200).send(images);
    });

    App.patch('/api/images/current', (req, res) => {
        IO.emit('image-update', req.body);
        res.status(200).send(req.body);
    });

};