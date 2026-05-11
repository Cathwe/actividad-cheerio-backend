const fs = require('fs').promises;
const cheerio = require('cheerio');
const path = require('path');

const obtenerProductos = async () => {

    const ruta = path.join(__dirname, '../data/productos.html');

    const html = await fs.readFile(ruta, 'utf-8');

    if (!html) {
        throw new Error('HTML vacío');
    }

    const $ = cheerio.load(html);

    const productos = [];

    $('.producto').each((i, elemento) => {

        productos.push({
            nombre: $(elemento).find('.nombre').text().trim(),
            precio: $(elemento).find('.precio').text().trim(),
            categoria: $(elemento).find('.categoria').text().trim()
        });

    });

    return productos;
};

module.exports = {
    obtenerProductos
};