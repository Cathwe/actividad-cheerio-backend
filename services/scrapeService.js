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
    if ($('.producto').length === 0) {
    throw new Error('No se encontraron elementos .producto en el HTML');
    }

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

const obtenerStats = async () => {

    const productos = await obtenerProductos();

    const precios = productos.map(p => Number(p.precio));

    const total = productos.length;

    const minimo = Math.min(...precios);

    const maximo = Math.max(...precios);

    const promedio =
        precios.reduce((acc, precio) => acc + precio, 0) / total;

    return {
        total_productos: total,
        precio_minimo: minimo,
        precio_maximo: maximo,
        precio_promedio: Number(promedio.toFixed(2))
    };

};

const buscarPorCategoria = async (categoria) => {

    const productos = await obtenerProductos();

    return productos.filter(
        p => p.categoria.toLowerCase() === categoria.toLowerCase()
    );

};

module.exports = {
    obtenerProductos,
    obtenerStats,
    buscarPorCategoria
};