const express = require('express');
const router = express.Router();
const recipieController = require('../controllers/recipieController');

/**
 * App Routes 
*/
router.get('/', recipieController.homepage);
router.get('/recipie/:id', recipieController.exploreRecipie );
router.get('/categories', recipieController.exploreCategories);
router.get('/categories/:id', recipieController.exploreCategoriesById);
router.post('/search', recipieController.searchRecipie);
router.get('/explore-latest', recipieController.exploreLatest);
router.get('/explore-random', recipieController.exploreRandom);
router.get('/submit-recipie', recipieController.submitRecipie);
router.post('/submit-recipie', recipieController.submitRecipieOnPost);

 
module.exports = router;