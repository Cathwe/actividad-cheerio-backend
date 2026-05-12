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

const verStats = async (req, res) => {

    try {

        const stats = await scrapeService.obtenerStats();

        res.status(200).json({
            ok: true,
            stats
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            error: error.message
        });

    }

};

const buscarProductos = async (req, res) => {

    try {

        const categoria = req.query.categoria;

        if (!categoria) {
            return res.status(400).json({
                ok: false,
                error: 'Debes indicar una categoria'
            });
        }

        const productos =
            await scrapeService.buscarPorCategoria(categoria);

        res.status(200).json({
            ok: true,
            categoria,
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
    scrapeProductos,
    verStats,
    buscarProductos
};