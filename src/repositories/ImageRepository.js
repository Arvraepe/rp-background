const fs = require('fs');
const sizer = require('image-size');

let Images = [];


const getAll = () => fs.readdirSync(`${WDIR}/html/images`)
    .map((name) => {
        const dimensions = sizer(`${WDIR}/html/images/${name}`);
        return { name, url: `http://localhost:9220/images/${name}`, dimensions };
    });

const find = (partial) => fs.readdirSync(`${WDIR}/html/images`)
    .map((name) => {
        const dimensions = sizer(`${WDIR}/html/images/${name}`);
        return { name, url: `http://localhost:9220/images/${name}`, dimensions };
    }).filter((image) => image.name.startsWith(partial));

module.exports = { getAll, find };