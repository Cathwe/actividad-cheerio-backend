const express = require('express');

const router = express.Router();

const scrapeController = require('../controllers/scrapeController');

router.get('/scrape', scrapeController.scrapeProductos);
router.get('/stats', scrapeController.verStats);
router.get('/buscar', scrapeController.buscarProductos);

module.exports = router;