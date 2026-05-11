const scrapeService = require('../services/scrapeService');

const scrapeProductos = async (req, res) => {

    try {

        const productos = await scrapeService.obtenerProductos();

        if (productos.length === 0) {
            return res.status(404).json({
                ok: false,
                mensaje: 'No se encontraron productos'
            });
        }

        res.status(200).json({
            ok: true,
            total: productos.length,
            productos
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            error: error.message
        });

    }

};

module.exports = {
    scrapeProductos
};