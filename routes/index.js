const express = require('express');
const router = express.Router();

const portfolioController = require('../controllers/portfolio');

router.get('/', portfolioController.index);

router.get('/project/:id', portfolioController.fetchProjectInto);

router.get('/about', portfolioController.aboutPage);

module.exports.routes = router;